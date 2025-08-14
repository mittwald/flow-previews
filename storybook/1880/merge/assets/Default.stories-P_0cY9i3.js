import{j as r}from"./iframe-BXDMX86q.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-CtdkcZph.js";import{L as m}from"./Link-D8c6lPdH.js";import{H as s}from"./HeaderNavigation-CdXBZ1Wi.js";import{B as o}from"./Button-BmoIjDQV.js";import{T as p}from"./Text-bj3uPEQb.js";import{I as C}from"./Image-BmC_0YFr.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Cm0JeTk-.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DhRGaODG.js";import"./ContextMenuSection-ClOvBHg6.js";import{a as D,M as G}from"./Modal-DXreO24n.js";import{H as E}from"./Heading-C4NbOxP2.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CA-rRUQt.js";import"./mergeRefs-BlQ7xsLt.js";import"./index-CXUv09w1.js";import"./useLocalizedStringFormatter-Cu-ju4he.js";import"./context-DyduO5X5.js";import"./utils-BbnHDINk.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DrTnWIPr.js";import"./useFocus-EmCEI_3W.js";import"./useFocusRing-dYveCnJn.js";import"./useFocusable-x1ctHjf6.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-B8vc0P23.js";import"./Button-CTCpguPA.js";import"./ProgressBar-CqOUw3BL.js";import"./Label-KbRAOmA4.js";import"./Hidden-9xlFaPY3.js";import"./useLabel-B1CTPn-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-1ziQicFl.js";import"./EmulatedBoldText-hpKq7Hz7.js";import"./Text-8unsz-5q.js";import"./AlertIcon--ML7Tevs.js";import"./Action-BFcs-WUV.js";import"./context-CKEF2sYl.js";import"./useStatic-B3xzZHSp.js";import"./getActionGroupSlot-C0k2Pat9.js";import"./Popover-Can9HETa.js";import"./DialogTriggerView-CDb3rmL9.js";import"./Dialog-B1-wK1GW.js";import"./RSPContexts-BVwGfu3g.js";import"./OverlayArrow-CxKD8bHN.js";import"./useControlledState-8m1Jp16z.js";import"./Collection-DRL76Dr2.js";import"./CollectionBuilder-tPYtcWuA.js";import"./Separator-dxgt4vJy.js";import"./Group-UZonwJ93.js";import"./SearchField-MnOXAoEn.js";import"./FieldError-B3Nc_fB3.js";import"./Form-BaF7AzDl.js";import"./useTextField-DRlSiNws.js";import"./useFormReset-CB9QX2BV.js";import"./TextField-ByaluKOI.js";import"./useEvent-DDpQr-S3.js";import"./SelectionManager-DxlIos2Z.js";import"./useCollator-4XxMIsgb.js";import"./FocusScope-CI4D8ZGu.js";import"./VisuallyHidden-_kOtwmic.js";import"./Switch-Jwn9Pypt.js";import"./Label-CEOTZRHh.js";import"./useToggleState-ie2pcJfb.js";import"./Overlay-FLjD2BNQ.js";import"./ButtonView-DPxT6iuL.js";import"./Heading-BOaJ6qO-.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Vr as default};
