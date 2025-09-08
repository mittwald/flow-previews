import{j as r}from"./iframe-DIlFkKfe.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-BS6-kuBv.js";import{L as m}from"./Link-BvGpLIZU.js";import{H as s}from"./HeaderNavigation-HugVkAxf.js";import{B as o}from"./Button-BvaN7Y-D.js";import{T as p}from"./Text-CG4Ucl9p.js";import{I as C}from"./Image-wcOkT8WU.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Dm6qRfO2.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BFw7PS6k.js";import"./ContextMenuSection-BxJSad4l.js";import{a as D,M as E}from"./Modal-CIzxiriV.js";import{H as G}from"./Heading-CxdU82fh.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DpgT95xr.js";import"./mergeRefs-TbbaDpSF.js";import"./index-DOnHcB6O.js";import"./useLocalizedStringFormatter-C2YSpIsm.js";import"./context-BIl-kujG.js";import"./utils-E_0WoXkF.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-D9JeOi6r.js";import"./useFocus-CiEitWNM.js";import"./useFocusRing-VlAoxJyj.js";import"./useFocusable-BKL1JWl8.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-wlCv7fWm.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-pHXSBUAI.js";import"./ProgressBar-CN0cToBP.js";import"./Label-op2mctQl.js";import"./Hidden-b1169DFL.js";import"./useLabel-BtXixU_d.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CN7RW_LC.js";import"./EmulatedBoldText-hH9OpyJt.js";import"./Text-DuUlrCBa.js";import"./AlertIcon-Cm8vEiqf.js";import"./Action-R0JS_3NZ.js";import"./context-SLpiSpKp.js";import"./useStatic-D-gec7Hx.js";import"./getActionGroupSlot-I5c5cWG6.js";import"./Popover-BX6fBO3O.js";import"./DialogTriggerView-B86hnYR6.js";import"./Dialog-CjLiSQnW.js";import"./RSPContexts-BFg1cs6H.js";import"./OverlayArrow-C5Az4zJe.js";import"./useControlledState-CWVlWyPG.js";import"./Collection-BBECU8Th.js";import"./CollectionBuilder-Dgy9FRg7.js";import"./Separator-BYxoqALx.js";import"./Group-CabJqO_k.js";import"./SearchField-BU427pXg.js";import"./FieldError-5aNzky8T.js";import"./Form-HyfIN8sB.js";import"./useTextField-Bo95H554.js";import"./useFormReset-BM0i_QS2.js";import"./TextField-BSCkD-qq.js";import"./useEvent-BZtMxgrD.js";import"./SelectionManager-_Z7bs6df.js";import"./useCollator-CcgJo-Oq.js";import"./FocusScope-C9n1sP7L.js";import"./VisuallyHidden-DzVxkJhT.js";import"./Switch-C1vYv3wt.js";import"./Label-BSjWh_q0.js";import"./useToggleState-DUfCUrL3.js";import"./Overlay-SU_iDKgB.js";import"./ButtonView-CaDIv6cT.js";import"./Heading-uk9khgL8.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Xr as default};
