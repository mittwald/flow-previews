import{j as r}from"./iframe-CPSqmfOl.js";import{u as H,$ as S,X as b,E as v,a0 as B}from"./IconWarning-Dz0_MR_L.js";import{L as m}from"./Link-DzxC0aXJ.js";import{H as s}from"./HeaderNavigation-C_jsdzNn.js";import{B as o}from"./Button-hKWpSws2.js";import{T as p}from"./Text-CpNtEmk9.js";import{I as C}from"./Image-CmBZ7qwE.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BBFj4tMb.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BXdODn3j.js";import"./ContextMenuSection-BqLyBWSf.js";import{a as D,M as E}from"./Modal-DBsrMOXA.js";import{H as G}from"./Heading-ChvCWS9D.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqWlcEyR.js";import"./mergeRefs-CG7T9kGm.js";import"./index-DVxNTjjY.js";import"./useLocalizedStringFormatter-CCqX6hi3.js";import"./context-DzKnIoVi.js";import"./utils-Bp4pxj2u.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CIALPEwc.js";import"./useFocus-BS8EzIP7.js";import"./useFocusRing-BjvWMKoG.js";import"./useFocusable-D7nBaAdw.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-DLNH37Uk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-e2WWi27E.js";import"./ProgressBar-BjfkTy0Q.js";import"./Label-CnzzRGNK.js";import"./Hidden-CX2yRk0H.js";import"./useLabel-BkGlbpXp.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CHMWQ9uX.js";import"./EmulatedBoldText-CFRYqLao.js";import"./Text-BvvdQ7EK.js";import"./AlertIcon-CT1xx5Ft.js";import"./Action-MbcV6Scy.js";import"./context-zgsQo9O-.js";import"./useStatic-OfVjkk_J.js";import"./getActionGroupSlot-0Vq6hASS.js";import"./Popover-8saljIIx.js";import"./DialogTriggerView-DhEtoXKf.js";import"./Dialog-BRCyKDs6.js";import"./RSPContexts-D2HT_eZz.js";import"./OverlayArrow-Cn6JJnKz.js";import"./useControlledState-BlXvRNFY.js";import"./Collection-DIuPDF5B.js";import"./CollectionBuilder-SnC7X_3r.js";import"./Separator-R_OoFgiT.js";import"./Group-BmbgIKSk.js";import"./SearchField-DIrZjnJq.js";import"./FieldError-CM7w-aUX.js";import"./Form-1yVZIEH7.js";import"./useTextField-Dv6BLFv4.js";import"./useFormReset-BUGG2d-X.js";import"./TextField-nrw2PmZM.js";import"./useEvent-COUAymzI.js";import"./SelectionManager-eBYaZCJQ.js";import"./useCollator-C37beSDK.js";import"./FocusScope-CjahwwK6.js";import"./VisuallyHidden-BiIsVZWt.js";import"./Switch-Cl8eqqd7.js";import"./Label-Cm39Oetk.js";import"./useToggleState-thdsmHNF.js";import"./Overlay-CGZWiF2S.js";import"./ButtonView-eehyUpt-.js";import"./Heading-5KhJiSKA.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
