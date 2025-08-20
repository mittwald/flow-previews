import{j as r}from"./iframe-BBU8Vi5z.js";import{u as H,$ as S,X as b,E as v,a0 as B}from"./IconWarning-Dzfnqwsx.js";import{L as m}from"./Link-Djt3kkdk.js";import{H as s}from"./HeaderNavigation-Cyg4GSYo.js";import{B as o}from"./Button-NW1Of_qV.js";import{T as p}from"./Text-Dmx06jI1.js";import{I as C}from"./Image-BdNnwT1f.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-bKWwTzG7.js";import{a as y,C as A,M as c}from"./ContextMenuContent-4X8hO0Fz.js";import"./ContextMenuSection-Bmtsd9QN.js";import{a as D,M as E}from"./Modal-CK1rPI8h.js";import{H as G}from"./Heading-CGPbMKMb.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dh-an_RK.js";import"./mergeRefs-0pGj6C_j.js";import"./index-NZtYUN4c.js";import"./useLocalizedStringFormatter-Dev9EnbH.js";import"./context-LLBgjHpi.js";import"./utils-Bl0beZ_h.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-VQWCXiAV.js";import"./useFocus-BO2H44GU.js";import"./useFocusRing-CcJdq_JE.js";import"./useFocusable-CH53ZRkg.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Y9e7IKXn.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-KQBofztE.js";import"./ProgressBar-BVefmcd6.js";import"./Label-DtosUGK-.js";import"./Hidden-BzeT6TXj.js";import"./useLabel-Dhqi6uDE.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-ZEfsbAUe.js";import"./EmulatedBoldText-CqafDXFr.js";import"./Text-DKRByA_e.js";import"./AlertIcon-Bdrp0HFY.js";import"./Action-DsHIOktH.js";import"./context-6Ujzj1TE.js";import"./useStatic-D_gn09gr.js";import"./getActionGroupSlot-fjA7p-Zb.js";import"./Popover-DwT_NCjp.js";import"./DialogTriggerView-BnWyhZ1v.js";import"./Dialog-CLHxRTEc.js";import"./RSPContexts-CuT-5ERO.js";import"./OverlayArrow-CTw_TzGf.js";import"./useControlledState-JBkrIXcy.js";import"./Collection-CAYUknat.js";import"./CollectionBuilder-Ck3uMDqM.js";import"./Separator-SD0n1yxH.js";import"./Group-SY2qABfH.js";import"./SearchField-CLTvmi2R.js";import"./FieldError-DZ37g0Dt.js";import"./Form-CKpkDEiG.js";import"./useTextField-7Er_r7Sk.js";import"./useFormReset-CcPabkKc.js";import"./TextField-ByGAuS2u.js";import"./useEvent-COUneAHH.js";import"./SelectionManager-C_TBHMOd.js";import"./useCollator-kculxw9I.js";import"./FocusScope-DSRDaxy2.js";import"./VisuallyHidden-DSdNvIxr.js";import"./Switch-DLbQyD4W.js";import"./Label-C0WPThdc.js";import"./useToggleState-ODapooW-.js";import"./Overlay-CyDht2Q3.js";import"./ButtonView-D9xVewS5.js";import"./Heading-BEs3i8tz.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
