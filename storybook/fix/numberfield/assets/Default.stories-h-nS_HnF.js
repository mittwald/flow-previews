import{j as r}from"./iframe-CPZzz606.js";import{t as H,$ as S,X as b,J as v,a0 as B}from"./IconWarning-BPgxt_jx.js";import{L as m}from"./Link-Dqwjgxvx.js";import{H as s}from"./HeaderNavigation-0S7w0DVs.js";import{B as o}from"./Button-pCBSultP.js";import{T as p}from"./Text-DzdHITqg.js";import{I as C}from"./Image-BtoFC0XR.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BnaytPLU.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DezJNh3H.js";import"./ContextMenuSection-FvjWTyHt.js";import{a as D,M as G}from"./Modal-Di9EskEm.js";import{H as E}from"./Heading-C5GWYBNF.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRqwxMEv.js";import"./mergeRefs-C0rS3-iA.js";import"./index-DEYSJV5h.js";import"./useLocalizedStringFormatter-DPLafpGQ.js";import"./context-CViJrtm-.js";import"./utils-hIOiRbRa.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Cx1ggqha.js";import"./useFocus-C_gNEsKA.js";import"./useFocusRing-B6XF-T5t.js";import"./useFocusable-Ci-OciRZ.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BcRThk1E.js";import"./Button-Duf2neHD.js";import"./ProgressBar-Bt4eS-sP.js";import"./Label-NfUS4-fW.js";import"./Hidden-Dc7FsRzF.js";import"./useLabel-z4mqv1Jd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-CzF8oOuQ.js";import"./EmulatedBoldText-28L-LsQV.js";import"./Text-BoUJhWX_.js";import"./AlertIcon-CdxXjd2Q.js";import"./Action-DmKaX5Zg.js";import"./context-AQX-vkQB.js";import"./useStatic-Dc3QDw1T.js";import"./getActionGroupSlot-DKujiI-6.js";import"./Popover-BrkdeB_0.js";import"./DialogTriggerView-CzpBmyqI.js";import"./Dialog-DwMRnG84.js";import"./RSPContexts-CvcQ69I6.js";import"./OverlayArrow-BDHME5Dc.js";import"./useControlledState-9qfYMj22.js";import"./Collection-7BVyTjlZ.js";import"./CollectionBuilder-CzrpBRcI.js";import"./Separator-BiRydKiO.js";import"./Group-C8G6Zc28.js";import"./SearchField-AT0aPHjw.js";import"./FieldError-zYKEm-70.js";import"./Form-BILDQ_LX.js";import"./useTextField-BMmwbaof.js";import"./useFormReset-C84L7XAZ.js";import"./TextField-DmRYj9dm.js";import"./useEvent-7mKEowYR.js";import"./SelectionManager-aTZIig9u.js";import"./useCollator-B1cTbBXX.js";import"./FocusScope-jLRXpVZJ.js";import"./VisuallyHidden-CPq3vmdG.js";import"./Switch-BaXsJirl.js";import"./Label-B_64PqkQ.js";import"./useToggleState-BWGqnnbp.js";import"./Overlay-XrNtLuso.js";import"./Header-Bp45XGrH.js";import"./ButtonView-DVhxb8HY.js";import"./Heading-BNuzDqIF.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
