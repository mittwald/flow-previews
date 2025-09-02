import{j as r}from"./iframe-DTi9QmA0.js";import{u as H,$ as S,X as b,E as v,a0 as B}from"./IconWarning-DxYwd6KK.js";import{L as m}from"./Link-DC8yU2UW.js";import{H as s}from"./HeaderNavigation-C5gDRZbc.js";import{B as o}from"./Button-DSq_4Ojq.js";import{T as p}from"./Text-rZE64TpZ.js";import{I as C}from"./Image-DiLQjV3w.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DgS32O6Z.js";import{a as y,C as A,M as c}from"./ContextMenuContent-Bzu_-8Yx.js";import"./ContextMenuSection-CUzpVhwH.js";import{a as D,M as E}from"./Modal-Ba9C0sbU.js";import{H as G}from"./Heading-DQ34o-na.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-hsBezmuJ.js";import"./mergeRefs-CRQizX0M.js";import"./index-AIe693y_.js";import"./useLocalizedStringFormatter-DlTJgtIJ.js";import"./context-CCdZhs-h.js";import"./utils-CL7caOLd.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DGBc0zwK.js";import"./useFocus-ZZE_0lQ_.js";import"./useFocusRing-DtGgtmUN.js";import"./useFocusable-C9TzKwDz.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CxmP28Uh.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DEHF5lJo.js";import"./ProgressBar-CZcDm412.js";import"./Label-CZheX-BS.js";import"./Hidden-vKywT2Di.js";import"./useLabel-BsOHSad-.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C8n4ubUN.js";import"./EmulatedBoldText-CvSsCxBp.js";import"./Text-uHJoYlsI.js";import"./AlertIcon-C9FPS-iN.js";import"./Action-xnhUT-gM.js";import"./context-O1stu3iI.js";import"./useStatic-CrO0OLrU.js";import"./getActionGroupSlot-ViofuXey.js";import"./Popover-CRgc4F5w.js";import"./DialogTriggerView-C9W1PVXA.js";import"./Dialog-D6TGzY5R.js";import"./RSPContexts-AUq49PY7.js";import"./OverlayArrow-CdR0wOB6.js";import"./useControlledState-plF7sQ7U.js";import"./Collection-ChROeXcJ.js";import"./CollectionBuilder-DdDVVtah.js";import"./Separator-rsJpBnK2.js";import"./Group-C0wS_Dx9.js";import"./SearchField-baoCU1ZF.js";import"./FieldError-B9D2P1L5.js";import"./Form-MgZU7Vwa.js";import"./useTextField-DlNFPg1I.js";import"./useFormReset-BLacz0U5.js";import"./TextField-1nP9PUNp.js";import"./useEvent-CA_eanes.js";import"./SelectionManager-B8EhsD0x.js";import"./useCollator-9sk9Xc09.js";import"./FocusScope-Dyo2gp6z.js";import"./VisuallyHidden-vt7X_vEY.js";import"./Switch-BJO5kxAo.js";import"./Label-CQetSSMr.js";import"./useToggleState-C96Ha_qP.js";import"./Overlay-uQO0zCiN.js";import"./ButtonView-DH2pCc46.js";import"./Heading-BuLKGKUk.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
