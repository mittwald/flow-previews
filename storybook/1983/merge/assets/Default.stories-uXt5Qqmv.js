import{j as r}from"./iframe-Bok6IQju.js";import{u as H,a1 as S,_ as b,F as v,a2 as B}from"./IconWarning-DqBq2uRB.js";import{L as m}from"./Link-DP9F-20c.js";import{H as s}from"./HeaderNavigation-CvLGdoMF.js";import{B as o}from"./Button-I2NsynHm.js";import{T as p}from"./Text-BAsYg4gL.js";import{I as C}from"./Image-CQ7kPsFe.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BOtLrbec.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CiZthjuC.js";import"./ContextMenuSection-1jp9gybG.js";import{a as D,M as G}from"./Modal-DawwtgI9.js";import{H as _}from"./Heading-CZgaWX2U.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cdbek8Wm.js";import"./index-DhUHiBWy.js";import"./index-DYD8zkLA.js";import"./useLocalizedStringFormatter-CH2KfGTV.js";import"./context-BMAErJH4.js";import"./utils-Cq7OaFeW.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DGEniIzO.js";import"./useFocus-DQozoN0B.js";import"./useFocusRing-Crdxdr5c.js";import"./useFocusable-BDCwijNy.js";import"./dynamic-BxA90To4.js";import"./LoadingSpinner-CodmSJuG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CmhZDz7g.js";import"./ProgressBar-laJsJEaJ.js";import"./Label-JT-qzIPs.js";import"./Hidden-CFwqYs4-.js";import"./useLabel-CF3vMWYC.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-g58G47PZ.js";import"./EmulatedBoldText-DA_lKfqn.js";import"./Text-DU8LVe1i.js";import"./AlertIcon-B9bXLpXV.js";import"./Action-Dn54AUS5.js";import"./context-BE37SzUM.js";import"./useStatic-CXnTBCs5.js";import"./getActionGroupSlot-Dxq8Ia-H.js";import"./Popover-C9lDYFV2.js";import"./DialogTriggerView-EJLujKFA.js";import"./Dialog-CcOFZkKF.js";import"./RSPContexts-DI5gwLuS.js";import"./OverlayArrow-_F5PaUR8.js";import"./useControlledState-B8rFPIj3.js";import"./Collection-DLNYYfFu.js";import"./CollectionBuilder-DE8Itz9_.js";import"./Separator-BrmCJU2D.js";import"./Group-_2KGjRtF.js";import"./SearchField-Dn82cF-B.js";import"./FieldError-MhOXyUFr.js";import"./Form-COiMNxjB.js";import"./useTextField-B52zV2BM.js";import"./useFormReset-BWLOy0Jx.js";import"./TextField-B7RWcShV.js";import"./useEvent-Byqgoyh2.js";import"./SelectionManager-YV1jDUXg.js";import"./useCollator-DW_vDOK-.js";import"./FocusScope-BqlGKiq6.js";import"./VisuallyHidden-C0tUvQRs.js";import"./ControlledNotification-CkAH0xrz.js";import"./Switch-BicH_owz.js";import"./Label-DIH0HQY4.js";import"./useToggleState-DHORjABp.js";import"./Overlay-DpyJ0zzD.js";import"./ButtonView-CJ5zsDg4.js";import"./Heading-5Y7g4Kq0.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(_,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Zr as default};
