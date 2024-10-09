import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

export const AdminLayout = () => (
  <div style={{ width: " 100vw", height: "100vh" }}>
    <StyledHeader>
      <LogoGroup>
        <h1>
          NIPA Cluster Test Web <span>by TMAX</span>
        </h1>
      </LogoGroup>

      <StyledNav>
        <StyledUl>
          <StyledLi>
            <NavLink to="/">Test</NavLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>

    <ContentContainer>
      <Outlet />
    </ContentContainer>
  </div>
);

const StyledHeader = styled.header`
  width: 100%;
  height: var(--gnb-height);
  display: flex;
  align-items: center;
  padding: 0 60px;
  background-color: var(--color-grey-900);
  gap: 24px;
  z-index: 100;
`;

const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    height: 40px;
  }

  h1 {
    color: var(--color-grey-300);
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
  }
  span {
    color: rgb(0, 88, 252);
  }
`;

const StyledNav = styled.nav`
  height: 36px;
  align-self: end;
`;

const StyledUl = styled.ul`
  height: 100%;
  display: flex;
`;

const StyledLi = styled.li`
  width: 107px;
  display: flex;

  a {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;

    color: var(--color-grey-400);
    border-bottom: 3px solid transparent;

    &:hover {
      color: var(--color-grey-300);
    }

    &.active {
      background-color: var(--color-grey-800);
      color: white;
      border-bottom: 3px solid var(--color-primary-500);
    }
  }
`;

const ContentContainer = styled.div`
  min-width: 90%;
  height: calc(100vh - 60px);
  margin: 0 40px;
`;
