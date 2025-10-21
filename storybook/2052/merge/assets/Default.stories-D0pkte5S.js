import{j as r}from"./iframe-DTheBFqg.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-CXTS1Zmo.js";import{L as m}from"./Link-KWZ2RBVk.js";import{H as s}from"./HeaderNavigation-Cz5x5a8C.js";import{B as o}from"./Button-Bmq0qjWo.js";import{T as p}from"./Text-DVaBUvZL.js";import{I as B}from"./Image-DUo70NW1.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-D39nLpxw.js";import{C as y,M as c}from"./MenuItem-qQ2bxnPY.js";import{C as A}from"./ContextMenuTrigger-CGbXqcoa.js";import"./ContextMenuSection-DVfZqLHJ.js";import{a as D,M as E}from"./Modal-Gq2FukhT.js";import{H as G}from"./Heading-B00i_-bg.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gCUS5Qd-.js";import"./index-ulNAr9WE.js";import"./index-C24gQbls.js";import"./useLocalizedStringFormatter-CvDaoHpN.js";import"./context-BBJsvWP1.js";import"./utils-CIVb4-pA.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DWQVem_V.js";import"./useFocus-gFMm1SVx.js";import"./useFocusRing-Bw6jYcrF.js";import"./useFocusable-CIkWBa0n.js";import"./dynamic-DYsVCHyX.js";import"./LoadingSpinner-CLX8R9JK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B9sfb4m-.js";import"./ProgressBar-Dr6zks-A.js";import"./Label-DaxiHPCi.js";import"./Hidden-BUnkE8VR.js";import"./useLabel-DE7AINdt.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BqPz5wcV.js";import"./EmulatedBoldText-P0d28SeQ.js";import"./Text-C48huDBb.js";import"./AlertIcon-DdQMaMt0.js";import"./Action-XVrtYdEu.js";import"./context-D5Eh6Kjh.js";import"./useStatic-KScOH6sT.js";import"./getActionGroupSlot-BTW6ZZ6S.js";import"./Popover-BFP7d86q.js";import"./useOverlayController-CV2OMrve.js";import"./OverlayContextProvider-D45bIP_5.js";import"./Dialog-DwHrBIEx.js";import"./RSPContexts-DdYP_yiK.js";import"./OverlayArrow-Bio3H0xn.js";import"./useControlledState-CxM5G25q.js";import"./Collection-BJPKgIab.js";import"./CollectionBuilder-CQSVhr8L.js";import"./SelectionIndicator-CjHN0yDY.js";import"./Separator-D87Ko5QM.js";import"./SelectionManager-uhDgeTSM.js";import"./useEvent-BjpDtAMc.js";import"./useCollator-2o_2J_me.js";import"./FocusScope-CHz78Q3h.js";import"./VisuallyHidden-D3PBi60E.js";import"./ClearPropsContextView-CxFwQ4wb.js";import"./ClearPropsContext-NW1-nYLP.js";import"./Switch-CvPH0ntY.js";import"./useFieldComponent-mBN-j8SF.js";import"./react-children-utilities-g2QZgYrG.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-DG-Ql63t.js";import"./useToggleState-SFl-JBqp.js";import"./useFormReset-C6eFdCIy.js";import"./OverlayTrigger-CpKaALyE.js";import"./ControlledNotification-Bs-S7xry.js";import"./DialogTriggerView-CT5NOY18.js";import"./Overlay-ByWqLCHS.js";import"./ButtonView-De92G280.js";import"./Heading-CTEcNSu5.js";const io={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;e.parameters={...e.parameters,docs:{...(j=e.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=e.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const eo=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,eo as __namedExportsOrder,io as default};
