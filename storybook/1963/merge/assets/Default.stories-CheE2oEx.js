import{j as r}from"./iframe-DVH1JXtP.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-CU_Jn-Rh.js";import{L as m}from"./Link-CLQ4f7r9.js";import{H as s}from"./HeaderNavigation-CwamdcqF.js";import{B as o}from"./Button-DSdtNwsI.js";import{T as p}from"./Text-D1P9H2_H.js";import{I as C}from"./Image-fbtldiYJ.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Cd7Wkoco.js";import{a as y,C as A,M as c}from"./ContextMenuContent-G7WFmcdo.js";import"./ContextMenuSection-CAJ8w-gs.js";import{a as D,M as E}from"./Modal-B0l768M9.js";import{H as G}from"./Heading-DPRmeFmU.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-FHPOrKi5.js";import"./mergeRefs-C62y_F-P.js";import"./index-CtJAiOn7.js";import"./useLocalizedStringFormatter-DaQD7sH9.js";import"./context-CdYfmHmn.js";import"./utils-BK8baG-i.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BeW5A3Oi.js";import"./useFocus-CQVh66mU.js";import"./useFocusRing-DRg_t-7O.js";import"./useFocusable-T2p-jFMn.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BkBLmddP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DzMSo0AA.js";import"./ProgressBar-BUKyhVQw.js";import"./Label-CMyz7O-I.js";import"./Hidden-weVCu2TA.js";import"./useLabel-NP7-116U.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C28Fm9d0.js";import"./EmulatedBoldText-Bdvunp4L.js";import"./Text-CBJ04nMy.js";import"./AlertIcon-C9APYlkG.js";import"./Action-Dfm0OsG2.js";import"./context-agOgnAGz.js";import"./useStatic-DdpPKhEz.js";import"./getActionGroupSlot-B8kYKXqG.js";import"./Popover-BgKKCKbh.js";import"./DialogTriggerView-BkHHTKiO.js";import"./Dialog-CmRE6s2J.js";import"./RSPContexts-B3CI5xG8.js";import"./OverlayArrow-ChkDdsgW.js";import"./useControlledState-Urxw2XXp.js";import"./Collection-D1ordEmx.js";import"./CollectionBuilder-ChFPkv_k.js";import"./Separator-QeHbXW8z.js";import"./Group-DXbOZXZb.js";import"./SearchField-BBggbv2v.js";import"./FieldError-DwXG4Veb.js";import"./Form-BPwJmxNt.js";import"./useTextField-qeWtBHoH.js";import"./useFormReset-rRCeDrNW.js";import"./TextField-DIPy1Cq_.js";import"./useEvent-D6G3dElA.js";import"./SelectionManager-olLeBgyH.js";import"./useCollator-DOzXEcud.js";import"./FocusScope-BiiCP1_E.js";import"./VisuallyHidden-DtF4wZC2.js";import"./Switch-aW4aHW5L.js";import"./Label-CxrJqwXs.js";import"./useToggleState-BfCVlH2X.js";import"./Overlay-ccuWddA5.js";import"./ButtonView-DPXtRNfN.js";import"./Heading-D1ZVwUdr.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
