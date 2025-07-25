import{j as r}from"./iframe-BjkHoCV_.js";import{D as k,$ as S,X as b,H as v,a0 as B}from"./IconWarning-CwiGKHoc.js";import{L as m}from"./Link-Broenk_I.js";import{H as s}from"./HeaderNavigation-CuN9HFda.js";import{B as o}from"./Button-DVqiRGCO.js";import{T as p}from"./Text-eTJAYSJY.js";import{I as C}from"./Image-DlPRYjSj.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-G5SbidE1.js";import{a as D,C as y,M as c}from"./ContextMenuContent-DIhkCU3v.js";import"./ContextMenuSection-BSbpkMS3.js";import{a as A,M as G}from"./Modal-Dy0DItDe.js";import{H as E}from"./Heading-LmDvZV8j.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C_mzLhgD.js";import"./mergeRefs-DrT8tsnG.js";import"./index-BhskFd1j.js";import"./useLocalizedStringFormatter-dqhA2Nz0.js";import"./context-rlbqmEoV.js";import"./utils-CGiEt-XO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CEdNq8mA.js";import"./useFocus-xSbgpmNE.js";import"./useFocusRing-Wt9DLJeW.js";import"./useFocusable-CXhBXWqP.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-DEvuHU_p.js";import"./Button-Di6PObN5.js";import"./ProgressBar-B7PSoMX-.js";import"./Label-B_ZT4LJD.js";import"./Hidden-CDdp3qbI.js";import"./useLabel-1QSzRNK-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-D-wpRimX.js";import"./EmulatedBoldText-Bcu9u8Hb.js";import"./Text-C4ERGDAc.js";import"./AlertIcon-B7gxaODE.js";import"./Action-CzPwWBMx.js";import"./context-CsL7NKVl.js";import"./useStatic-D1q5yxzl.js";import"./getActionGroupSlot-Bo5RA54w.js";import"./Popover-luZqOS3K.js";import"./DialogTriggerView-A1G7QU7L.js";import"./Dialog-DTbN5TSI.js";import"./RSPContexts-B3qavTDI.js";import"./OverlayArrow-BOh6Y0Vd.js";import"./useControlledState-DGwCCxzP.js";import"./Collection-CFDXeLKH.js";import"./CollectionBuilder---ElTJdF.js";import"./Separator-s9nTWt-s.js";import"./Input-CkroWKbe.js";import"./SearchField-C9v5dfT_.js";import"./FieldError-BxnpY5Jk.js";import"./Form-PglXiK24.js";import"./Group-CFG6yZ2f.js";import"./useTextField-DkP6KCaQ.js";import"./useFormReset-DzRnd0mU.js";import"./TextField-gOyCtBR-.js";import"./SelectionManager-DffnzBv0.js";import"./useEvent-DmGZIyRy.js";import"./useCollator-BsISA5DC.js";import"./FocusScope-mH_5A_-I.js";import"./VisuallyHidden-DAjtA0IX.js";import"./Switch-e6empCY_.js";import"./Label-BYU6zcWR.js";import"./useToggleState-Dv7wlAGU.js";import"./Overlay-Cck_ku1Q.js";import"./Header-OJEPXAZP.js";import"./ButtonView-B3Lwz5wh.js";import"./Heading-D8l_AjAM.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,H;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(H=(T=n.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,Zr as default};
