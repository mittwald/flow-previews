import{j as r}from"./iframe-DdApAMdB.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-Cpaydhok.js";import{L as m}from"./Link-AojgOwdW.js";import{H as s}from"./HeaderNavigation-B0ROKQZP.js";import{B as o}from"./Button-BxqrW572.js";import{T as p}from"./Text-BwGnDMAi.js";import{I as C}from"./Image-TOHI7GMH.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CPnOomr_.js";import{a as y,C as A,M as c}from"./ContextMenuContent-UKv3SAnE.js";import"./ContextMenuSection-BSkJWNpm.js";import{a as D,M as G}from"./Modal-Bkenzcvj.js";import{H as E}from"./Heading-DcDMFNCx.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CEuVt76S.js";import"./mergeRefs-BvD6XTJo.js";import"./index-CmLMHji9.js";import"./useLocalizedStringFormatter-TjZfQGwd.js";import"./context-DR2Fzh74.js";import"./utils-DAIXfBLw.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DRRHPdfj.js";import"./useFocus-D5He2YFW.js";import"./useFocusRing-PbnZIDVe.js";import"./useFocusable-DBXoEHDs.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BhKvcbL5.js";import"./Button-C9Xh5N71.js";import"./ProgressBar-Cc1yHw2d.js";import"./Label-kWZFrMix.js";import"./Hidden-BMg7stLw.js";import"./useLabel-DpyWwSJM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-Bz93nYTI.js";import"./EmulatedBoldText-BU0UeOKO.js";import"./Text-CGWbxphN.js";import"./AlertIcon-BdCjdA2q.js";import"./Action-CsdkjVM_.js";import"./context-ruD8SKGF.js";import"./useStatic-CD0TvTTa.js";import"./getActionGroupSlot-w8JWX1Ad.js";import"./Popover-7VI1iAFw.js";import"./DialogTriggerView-B0VPnPVc.js";import"./Dialog-BpJkjD9u.js";import"./RSPContexts-BOrJeOok.js";import"./OverlayArrow-C4-25t1a.js";import"./useControlledState-BEGJzQOc.js";import"./Collection-DGYwVSuD.js";import"./CollectionBuilder-EIxRxNub.js";import"./Separator-S3NhCE8J.js";import"./Group-D5m3Hvm8.js";import"./SearchField-C5uNx_R9.js";import"./FieldError-CIX9Q6F5.js";import"./Form-EknBmRno.js";import"./useTextField-5LH3O4RW.js";import"./useFormReset-BHdeIf20.js";import"./TextField-DkSNZzFP.js";import"./useEvent-L4LWTqTI.js";import"./SelectionManager-CLIYI5bX.js";import"./useCollator-DB6a0khr.js";import"./FocusScope-CMXbBALw.js";import"./VisuallyHidden-DyxmrKqh.js";import"./Switch-zso_e1PC.js";import"./Label-Yw88ZPyv.js";import"./useToggleState-C3iafE5U.js";import"./Overlay-DDe9JzK6.js";import"./Header-Cz7ytX7j.js";import"./ButtonView-BT9EvhT6.js";import"./Heading-nK46_57w.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
