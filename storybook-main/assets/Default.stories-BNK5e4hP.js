import{j as r}from"./iframe-B8noCUnE.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-CGV_Yvrm.js";import{L as m}from"./Link-tqSdyxhy.js";import{H as s}from"./HeaderNavigation-BDZOXSL0.js";import{B as o}from"./Button-B3YMBdra.js";import{T as p}from"./Text-Da5wEoPX.js";import{I as C}from"./Image-CPlfo7gp.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DmawL-xD.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CIFzVKW5.js";import"./ContextMenuSection-C8rhXJgq.js";import{a as D,M as E}from"./Modal-FfLWEEk3.js";import{H as G}from"./Heading-DlJiFfLx.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B9__2qg6.js";import"./mergeRefs-BTOy5cDw.js";import"./index-D9cNYuBB.js";import"./useLocalizedStringFormatter-D4YUkL9v.js";import"./context-Co6CbP9u.js";import"./utils-DycHSEAg.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CGDWDrJK.js";import"./useFocus-DSdjnAxu.js";import"./useFocusRing-BLe8ZvF0.js";import"./useFocusable-CKRftzjl.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-a5nWuss2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CwMP1veT.js";import"./ProgressBar-7N6gfaNO.js";import"./Label-DKLhlgli.js";import"./Hidden-CMD8PFZZ.js";import"./useLabel-CluaPz9W.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-91muAEwH.js";import"./EmulatedBoldText-DHCsJE01.js";import"./Text-C0NfSVbg.js";import"./AlertIcon-BP-W0sfD.js";import"./Action-BUJ71uGO.js";import"./context-BJExLDeV.js";import"./useStatic-D8Kg3g-R.js";import"./getActionGroupSlot-CuZ7B-dR.js";import"./Popover-BajymHCd.js";import"./DialogTriggerView-CaeQRtG8.js";import"./Dialog-gc4bcspb.js";import"./RSPContexts-CYAtt9lw.js";import"./OverlayArrow-CUBciziX.js";import"./useControlledState-Dup9xG7O.js";import"./Collection-B6gzk5_Q.js";import"./CollectionBuilder-DiBm4MiM.js";import"./Separator-BwYsz5vJ.js";import"./Group-B5h_0xpF.js";import"./SearchField-gENajJ8Y.js";import"./FieldError-DD6GhKc_.js";import"./Form-BoGb9d1y.js";import"./useTextField-BKrTYTzq.js";import"./useFormReset-BTHbcpmM.js";import"./TextField-IVl1Cmgq.js";import"./useEvent-Y0Lkcg6v.js";import"./SelectionManager-D_SvmIZH.js";import"./useCollator-CP4AKmd0.js";import"./FocusScope-b3Inwx6M.js";import"./VisuallyHidden-Dp1jIams.js";import"./Switch-CbIGnmEV.js";import"./Label-B1NlPlCA.js";import"./useToggleState-FCCcmZjD.js";import"./Overlay-CmxAjurx.js";import"./ButtonView-DssAJAGf.js";import"./Heading-V5-rm1Vl.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
