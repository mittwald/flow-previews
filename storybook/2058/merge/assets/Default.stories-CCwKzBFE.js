import{j as r}from"./iframe-D2Anwmct.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-DnpABaws.js";import{L as m}from"./Link-B6JgnFIM.js";import{H as s}from"./HeaderNavigation-BcFEqpQE.js";import{B as o}from"./Button-DzBCXdJ8.js";import{T as p}from"./Text-DtdPLjLU.js";import{I as B}from"./Image-DLqcZbN8.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CkDAdSbW.js";import{C as y,M as c}from"./MenuItem-CpfyUFgs.js";import{C as A}from"./ContextMenuTrigger-C3mhuEuv.js";import"./ContextMenuSection-DEYSZK6N.js";import{a as D,M as E}from"./Modal-JfHrECSn.js";import{H as G}from"./Heading-CHI9LGKg.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DKluqIHM.js";import"./index-f9td_37l.js";import"./index-Ch7RQrKi.js";import"./useLocalizedStringFormatter-BekYTjw8.js";import"./context--yho_VB2.js";import"./utils-BpjcCBEz.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DkH4CmpU.js";import"./useFocus-CPbnM8zc.js";import"./useFocusRing-BsT1m1qa.js";import"./useFocusable-BPmxfIwz.js";import"./dynamic-Cfahilqg.js";import"./LoadingSpinner-Dn83SSS7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DXQ0LQy1.js";import"./ProgressBar-B5M0YtFC.js";import"./Label-CyDLPDuC.js";import"./Hidden-C6VQoCGL.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CPuaporN.js";import"./EmulatedBoldText-C4J0xt-K.js";import"./Text-lRP8kqf1.js";import"./AlertIcon-Kmw1VxqP.js";import"./Action-TQJO2mvI.js";import"./context-BRmDUAMd.js";import"./useStatic-CHoU06Vl.js";import"./getActionGroupSlot-CMiTVAum.js";import"./Popover-UOV2agJ5.js";import"./useOverlayController-Ul_RLZ0a.js";import"./OverlayContextProvider-C-LoU2NQ.js";import"./Dialog-CzAn2oqc.js";import"./RSPContexts-W5re5w0Z.js";import"./OverlayArrow-nozbf4eZ.js";import"./useControlledState-CmSk5MJT.js";import"./Collection-C6c4IzCm.js";import"./CollectionBuilder-BN9-opMn.js";import"./context-X2EiAF6-.js";import"./Separator-XkOJaGaU.js";import"./SelectionManager-BVJUtLYE.js";import"./useEvent-eZ8bSyVx.js";import"./useCollator-DzTf225U.js";import"./FocusScope-B3f0Mp00.js";import"./VisuallyHidden-Cz7LPiXA.js";import"./ClearPropsContextView-DS9FXrAR.js";import"./Switch-DRIHkV-C.js";import"./useMakeFocusable-DLbAZGSO.js";import"./useToggleState-DfnSsBnT.js";import"./useFormReset-Bn-oECSu.js";import"./OverlayTrigger-DO8WsQK1.js";import"./ControlledNotification-Dluv3CpF.js";import"./DialogTriggerView-DT275WLh.js";import"./Overlay-B6A4XWM9.js";import"./ButtonView-Ckjyb7-A.js";import"./Heading-cAelsVpC.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
