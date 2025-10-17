import{j as r}from"./iframe-CTxtjXon.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-BCagwmXL.js";import{L as m}from"./Link-P7Z3jhiY.js";import{H as s}from"./HeaderNavigation-CnIm304P.js";import{B as o}from"./Button-CTR-HA58.js";import{T as p}from"./Text-DQcec0AG.js";import{I as B}from"./Image-DOwT7-bN.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CViVbvKD.js";import{C as y,M as c}from"./MenuItem-BGYYxTzd.js";import{C as A}from"./ContextMenuTrigger-DjbMkCjw.js";import"./ContextMenuSection-BZN_5wKO.js";import{a as D,M as E}from"./Modal-Dkm77QaQ.js";import{H as G}from"./Heading-DhacWgsT.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cceoz8ap.js";import"./index-BzGnAInb.js";import"./index-BCkzqzEU.js";import"./useLocalizedStringFormatter-B51ecTCL.js";import"./context-OuuPOLWB.js";import"./utils-Dyxd3-sq.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-7iMHywUA.js";import"./useFocus-DHjekZqL.js";import"./useFocusRing-w77Sy5gu.js";import"./useFocusable-C9nsuFPZ.js";import"./dynamic-BqhEVzNx.js";import"./LoadingSpinner-ju42Rriq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BdISzqDC.js";import"./ProgressBar-CwnBBaoA.js";import"./Label-JOCFYh16.js";import"./Hidden-B6GGwvwy.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B97evyF-.js";import"./EmulatedBoldText-Da4iAST0.js";import"./Text-DVSB2R1T.js";import"./AlertIcon-CrxYL_L2.js";import"./Action-DoHauz19.js";import"./context-C6LdJJW6.js";import"./useStatic-FLOcJlac.js";import"./getActionGroupSlot-CRH0bVBh.js";import"./Popover-L0La1dHt.js";import"./useOverlayController-BbfXAflO.js";import"./OverlayContextProvider-CtgoSGMn.js";import"./Dialog-D2IuAywV.js";import"./RSPContexts-C8qhDI2w.js";import"./OverlayArrow-DQGSQRaj.js";import"./useControlledState-CwLLr83F.js";import"./Collection-Bj68a-ij.js";import"./CollectionBuilder-1DpsfIN0.js";import"./SelectionIndicator-DjYZoC83.js";import"./Separator-7MWrsQei.js";import"./SelectionManager-CnAC5LUd.js";import"./useEvent-VfxjGHfX.js";import"./useCollator-W6_B_X8C.js";import"./FocusScope-BV_8rP7c.js";import"./VisuallyHidden-CZsUJsM2.js";import"./ClearPropsContextView-0ZtOxsLm.js";import"./Switch-Ck3l_Rde.js";import"./useMakeFocusable-CHy9hJsR.js";import"./useToggleState-DMPmy5mL.js";import"./useFormReset-dEYYJoAx.js";import"./OverlayTrigger-CmKz4lmd.js";import"./ControlledNotification-CROEzK4U.js";import"./DialogTriggerView-BOlf1zWh.js";import"./Overlay-C20xcYbm.js";import"./ButtonView-CPmP11lC.js";import"./Heading-CDy8srZ9.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
