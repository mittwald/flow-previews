import{j as r}from"./iframe-C72LIGrp.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-DoRUMKye.js";import{L as m}from"./Link-XTU_bSRD.js";import{H as s}from"./HeaderNavigation-CgZfI3hY.js";import{B as o}from"./Button-Dmf_fI6U.js";import{T as p}from"./Text-CvlnZLd7.js";import{I as B}from"./Image-BUVNJrrs.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-C-FGV6wr.js";import{C as y,M as c}from"./MenuItem-Ds0Qug56.js";import{C as A}from"./ContextMenuTrigger-5S7K5WOT.js";import"./ContextMenuSection-DZErrfjN.js";import{a as D,M as E}from"./Modal-BS_LB8GF.js";import{H as G}from"./Heading-CQTj2TvE.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-iVWHpCHC.js";import"./index-D0tOGuOJ.js";import"./index-D1phmMZw.js";import"./useLocalizedStringFormatter-BdEN-g86.js";import"./context-BWimVEWy.js";import"./utils-Day1TTYQ.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CqQxVakl.js";import"./useFocus-B4vRNHSZ.js";import"./useFocusRing-DuRh0iim.js";import"./useFocusable-Dej5ci1L.js";import"./dynamic-M8RwUexW.js";import"./LoadingSpinner-_EHg-BbH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BS54933W.js";import"./ProgressBar-BXSV1RNz.js";import"./Label-CF9BgwC5.js";import"./Hidden-qTQe9qE3.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Bf0-GHuQ.js";import"./EmulatedBoldText-CkSYZpi_.js";import"./Text-_4m1t08i.js";import"./AlertIcon-CEvw8Cx2.js";import"./Action-BbbbpS8d.js";import"./context-BXphONxA.js";import"./useStatic-DPVFgY8A.js";import"./getActionGroupSlot-CHOOOagJ.js";import"./Popover-D3GlmI5m.js";import"./useOverlayController-Bq6Nzlwb.js";import"./OverlayContextProvider-C5iPb09x.js";import"./Dialog-DSx4rsSv.js";import"./RSPContexts-CxFI_fU2.js";import"./OverlayArrow-CdAhbmJ_.js";import"./useControlledState-BbMqle0_.js";import"./Collection-CdRuOc0_.js";import"./CollectionBuilder-CIcvBtxV.js";import"./context-yrxx87JI.js";import"./Separator-B7O3kRSm.js";import"./SelectionManager-BcjpThhu.js";import"./useEvent-C77oyAsY.js";import"./useCollator-BOhm7rcx.js";import"./FocusScope-CCmAn32n.js";import"./VisuallyHidden-BStPS_vY.js";import"./ClearPropsContextView-DQBdf73E.js";import"./Switch-Bm_KKOL7.js";import"./useMakeFocusable-cMpHNIXZ.js";import"./useToggleState-CGl4-wpV.js";import"./useFormReset-Bg8mSl5k.js";import"./OverlayTrigger-FJ2Pyz9u.js";import"./ControlledNotification-DkB8_49S.js";import"./DialogTriggerView-ikS86VIU.js";import"./Overlay-Bi_cYiLQ.js";import"./ButtonView-b3o-zoCr.js";import"./Heading-BNkuiER5.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
