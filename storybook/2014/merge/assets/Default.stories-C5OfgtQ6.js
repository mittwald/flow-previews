import{j as r}from"./iframe-Dp_ptgTO.js";import{x as k,a0 as H,Z as S,E as v,a1 as B}from"./IconWarning-CESkhJY3.js";import{L as m}from"./Link-BfaDPDPe.js";import{H as s}from"./HeaderNavigation-C5yoEfB7.js";import{B as o}from"./Button-Bm7Tf187.js";import{T as p}from"./Text-DKCpryII.js";import{I as C}from"./Image-BK4MEqdT.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-N3s2oGNZ.js";import{b as y,C as A,M as c}from"./ContextMenuSection-DtLQL4-Q.js";import{a as D,M as E}from"./Modal-f8QEgLk3.js";import{H as G}from"./Heading-ffyrPZO9.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BVkYESiU.js";import"./mergeRefs-Ct0p8Qt4.js";import"./index-4oHG5ZZP.js";import"./useLocalizedStringFormatter-Bz9yQxqy.js";import"./context-dvnbYm3m.js";import"./utils-jLhJmKpa.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DgTBEQGy.js";import"./useFocus-BGDVbxBE.js";import"./useFocusRing-MWP1ZcQm.js";import"./useFocusable-Pd3lvrKn.js";import"./dynamic-N86xW7wt.js";import"./LoadingSpinner-CO7k3E9d.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CtqZigcv.js";import"./ProgressBar-DMXo3Oxb.js";import"./Label-BqJm3nBk.js";import"./Hidden-g0k1R_XW.js";import"./useLabel-CuGJ_WBQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D6_L72sC.js";import"./EmulatedBoldText-RaOWrRWm.js";import"./Text--dlrpEAx.js";import"./AlertIcon-BvgIWxS5.js";import"./Action-D8BJShfM.js";import"./context-DDTw2-bn.js";import"./useStatic-m8l0C_TU.js";import"./getActionGroupSlot-DyRiGzXE.js";import"./Popover-CLhZGReB.js";import"./DialogTriggerView-VHLYNpVx.js";import"./RSPContexts-B9nFdFkt.js";import"./ClearPropsContextView-BbJozVRy.js";import"./useControlledState-rqltzUWl.js";import"./FocusScope-B49GjYPu.js";import"./useCollator-DfaTpKsx.js";import"./VisuallyHidden-pbsZsV6L.js";import"./Collection-DhlfIuKx.js";import"./CollectionBuilder-D4MRH1wH.js";import"./context-DhKk3IGs.js";import"./Separator-BGudjOFK.js";import"./SelectionManager-BktYLEMf.js";import"./useEvent-BAkCuTus.js";import"./Switch-BhZFtZ7l.js";import"./Label-Bfe7G6ov.js";import"./useToggleState-BTLQo5Y8.js";import"./useFormReset-CqaGS40P.js";import"./Overlay-DQDrGgYy.js";import"./ButtonView-Bt9S45h0.js";import"./Heading-VpbVhQYC.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},n={args:{color:"dark"},globals:{backgrounds:"light"}},i={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=n.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{n as Dark,t as Default,i as Light,e as WithContextMenu,Jr as __namedExportsOrder,Fr as default};
