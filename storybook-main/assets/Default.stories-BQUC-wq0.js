import{j as r}from"./iframe-BsWE3_7o.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-DP87PzzZ.js";import{L as m}from"./Link-DUzgima2.js";import{H as s}from"./HeaderNavigation-hKdlgJsF.js";import{B as o}from"./Button-B8k4PzHL.js";import{T as p}from"./Text-BX8imB2t.js";import{I as B}from"./Image-DGrOlXYu.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CdMBZTUB.js";import{C as y,M as c}from"./MenuItem-Ct3urkYD.js";import{C as A}from"./ContextMenuTrigger-8lrQpNpV.js";import"./ContextMenuSection-B-erxgIm.js";import{a as D,M as E}from"./Modal-C7ON-bXz.js";import{H as G}from"./Heading-CjI7aUjt.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cm7zYSgo.js";import"./index-Bx4whYyJ.js";import"./index-Dl-28hpS.js";import"./useLocalizedStringFormatter-Cam9elWn.js";import"./context-JgUU7ob0.js";import"./utils-CDS5H-7_.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BAk4CpA9.js";import"./useFocus-D0VElTMN.js";import"./useFocusRing-VBFwaSrL.js";import"./useFocusable-CddXNiQZ.js";import"./dynamic-CuzBn_WV.js";import"./LoadingSpinner-BHbUYlFD.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dk5kDV0G.js";import"./ProgressBar-B-b_Vg6x.js";import"./Label-CRuRdSc0.js";import"./Hidden-BJN4u45n.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-LwAPTQ-2.js";import"./EmulatedBoldText-BTQlJ2rY.js";import"./Text-TQ7kewRG.js";import"./AlertIcon-DWc2JsAt.js";import"./Action-BuGRjvOM.js";import"./context-CUTz3ChQ.js";import"./useStatic-BvSdYqAU.js";import"./getActionGroupSlot-C6PA21cd.js";import"./Popover-BQlnJjXA.js";import"./useOverlayController-DetoWaxX.js";import"./OverlayContextProvider-xyA10wvE.js";import"./Dialog-BSaAMEbK.js";import"./RSPContexts-BZ8FUmDB.js";import"./OverlayArrow-IIw_dauQ.js";import"./useControlledState-ejVvWz-k.js";import"./Collection-DojlZZtj.js";import"./CollectionBuilder-B76ZLXz4.js";import"./context-lpkCHAFg.js";import"./Separator-Dpoi8-ef.js";import"./SelectionManager-01TNEB4e.js";import"./useEvent-iSMBndhq.js";import"./useCollator-Dfjx7kh0.js";import"./FocusScope-BU2EHzP0.js";import"./VisuallyHidden-CnzfSQ3j.js";import"./ClearPropsContextView-BWN31-oJ.js";import"./Switch--4T4sZy6.js";import"./useMakeFocusable-r7PJwVhH.js";import"./useToggleState-DvZpr89w.js";import"./useFormReset-DgPn8KEa.js";import"./OverlayTrigger-SkKoiEws.js";import"./ControlledNotification-CQUrToOI.js";import"./DialogTriggerView-CTYJ0CEZ.js";import"./Overlay-D-ebXM0O.js";import"./ButtonView-CqGnnS3E.js";import"./Heading-CzYkVZjM.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
