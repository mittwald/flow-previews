import{j as r}from"./iframe-CyjdJwA_.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-BNd_xcWu.js";import{L as m}from"./Link-CwsSu8y8.js";import{H as s}from"./HeaderNavigation-NhY3clgK.js";import{B as o}from"./Button-CWr2AVcL.js";import{T as p}from"./Text-usW35pyR.js";import{I as C}from"./Image-D3OtxWkZ.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DIJGXpBP.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DZtoyn9T.js";import"./ContextMenuSection-BlPAfXHe.js";import{a as D,M as E}from"./Modal-CavEB0Uq.js";import{H as G}from"./Heading-BlOPZbVl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Blii8gH5.js";import"./mergeRefs-C5H4AiTO.js";import"./index-Do1c4p-v.js";import"./useLocalizedStringFormatter-Dqj-tDTI.js";import"./context-U2uVXE2j.js";import"./utils-BrA2SjLY.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DeuQBFn_.js";import"./useFocus-kh_9V4VQ.js";import"./useFocusRing-CIRJex-W.js";import"./useFocusable-Bd5Kcxc9.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Cs_zZqgK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DtnX1sXm.js";import"./ProgressBar-ClszfSN8.js";import"./Label-CzrgQa8v.js";import"./Hidden-CYpTJoxS.js";import"./useLabel-CugdBF8m.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-COCGQLuR.js";import"./EmulatedBoldText-Cm98uRnm.js";import"./Text-D5hkVXTt.js";import"./AlertIcon-DX20iwEQ.js";import"./Action-pU0vZnxr.js";import"./context-D_hcNXze.js";import"./useStatic-Cvg4-ciK.js";import"./getActionGroupSlot-Dg5re8Hn.js";import"./Popover-dGXJqITL.js";import"./DialogTriggerView-BaCd4fKq.js";import"./Dialog-CDIzoxMq.js";import"./RSPContexts-CNBrQuIV.js";import"./OverlayArrow-DmbU7KN6.js";import"./useControlledState-BMmGZgaN.js";import"./Collection-BOX-2d7N.js";import"./CollectionBuilder-CmkEkI_W.js";import"./Separator-CV-ezLmw.js";import"./Group-fGbj7PxB.js";import"./SearchField-CcfmTUF_.js";import"./FieldError-FJXabK8a.js";import"./Form-CbzZ-2v4.js";import"./useTextField-Ck4Yz0Jg.js";import"./useFormReset-DhmyIfWL.js";import"./TextField-CvU05O_G.js";import"./useEvent-CI_dmwlv.js";import"./SelectionManager-bu__7N-a.js";import"./useCollator-Bj1Rn4ie.js";import"./FocusScope-BgpQQFhh.js";import"./VisuallyHidden-DG_rebhq.js";import"./Switch-DRYXwQ9s.js";import"./Label-C9WW8BSu.js";import"./useToggleState-F7CGkmbU.js";import"./Overlay-DHVFDrDx.js";import"./ButtonView-D0NnXWhL.js";import"./Heading-DUgzyzjX.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
