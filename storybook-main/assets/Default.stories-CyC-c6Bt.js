import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CXcpQZ5J.js";import{n as B,o as H,i as S,p as v,q as C}from"./IconWarning-B9HL9CFH.js";import{L as m}from"./Link-D0qlutni.js";import{H as s}from"./HeaderNavigation-CU0VC45j.js";import{B as o}from"./Button-DwgkhfFv.js";import{T as p}from"./Text-ilWQSh2o.js";import{I as L}from"./Image-B2RAPQbt.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-CtIqfVzJ.js";import{a as b,C as D,M as c}from"./ContextMenuContent-DsIk-YLD.js";import"./ContextMenuSection-CuRIPxil.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-TRWB6vIv.js";import{H as W}from"./Heading-YTPyIOg9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BhVCUVKf.js";import"./mergeRefs-B22Il0iz.js";import"./index-_FZDHFZo.js";import"./index-DJQWtO6Q.js";import"./useLocalizedStringFormatter-PBUSZsmh.js";import"./utils-Df1au6pS.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-v55RTCzR.js";import"./useFocus-Beyq6_MT.js";import"./useFocusRing-Dy9tY2VR.js";import"./useFocusable-C5BPrGjf.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-GJE4fldi.js";import"./Button-CAwd2L_u.js";import"./ProgressBar-DfZ38-9l.js";import"./Label-DfZa7xTI.js";import"./Hidden-DtYLaSTT.js";import"./useLabel-DrVJGper.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./Text-WoclspSc.js";import"./react-children-utilities-DD9PhoP7.js";import"./AlertIcon-C5L47VAE.js";import"./Action-BfuzMKoN.js";import"./context-BJd9A0SI.js";import"./useStatic-CZNshcmv.js";import"./getActionGroupSlot-UfL_FZTW.js";import"./Popover-CT76g4R7.js";import"./OverlayTrigger-CxHIuRua.js";import"./Dialog-DGCaVP1m.js";import"./RSPContexts-C2SW_8A9.js";import"./OverlayArrow-Cyo91zw-.js";import"./Collection-gb5i7bex.js";import"./CollectionBuilder-DJ8GEp2F.js";import"./Separator-rUEtuaIL.js";import"./useOverlayTriggerState-Bcoz_tbR.js";import"./useControlledState-CHe-wEx1.js";import"./SelectionManager-DrFVCucR.js";import"./useEvent-D5X-zOrV.js";import"./useCollator-gRp1mHBo.js";import"./FocusScope-DN1fuaqe.js";import"./VisuallyHidden-D7VTLdOh.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-6LSgdenh.js";import"./Switch-DfO96G7U.js";import"./Label-Ccht5eDB.js";import"./useToggleState-Bew6BMnT.js";import"./useFormReset-McAVcQ-S.js";import"./Overlay-Bo4PqVMl.js";import"./Header-L6_i9YEX.js";import"./ButtonView-CFSsOiRA.js";import"./Heading-DBX-SCuC.js";const oo={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},parameters:{backgrounds:A}},a={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,k,T;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(k=a.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const to=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,a as Light,e as WithContextMenu,to as __namedExportsOrder,oo as default};
