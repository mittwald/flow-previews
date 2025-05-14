import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CgfFrydU.js";import{o as B,p as H,j as S,q as v,r as C}from"./IconWarning-vNKQyIKv.js";import{L as m}from"./Link-uYraB52e.js";import{H as s}from"./HeaderNavigation-TTKbQ5ec.js";import{B as o}from"./Button-H1hagMpk.js";import{T as p}from"./Text-Bi2hMldU.js";import{I as L}from"./Image-Sw_gtoDF.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-NhtOx4Mm.js";import{a as b,C as D,M as c}from"./ContextMenuContent-wX6SIYaM.js";import"./ContextMenuSection-BWUNTJl-.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-DjmpV89N.js";import{H as W}from"./Heading-DqgQ18wm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B0K_0b8i.js";import"./mergeRefs-78-678FT.js";import"./index-sY8i7rw0.js";import"./index-B2KKL2uI.js";import"./useLocalizedStringFormatter-P5-5MQWA.js";import"./utils-C22QCCbL.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CcZGRUOg.js";import"./useFocus-DQVi-kHM.js";import"./useFocusRing-B_JVXUf7.js";import"./useFocusable-7WyUSQpO.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CXmP3004.js";import"./Button-CvRwfedC.js";import"./ProgressBar-CWMH1Kpx.js";import"./Label-DKfobBxX.js";import"./Hidden-DwT0szmK.js";import"./useLabel-Bwhd-XGR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Text-PWuSNm-G.js";import"./react-children-utilities-z6xJRDdy.js";import"./AlertIcon-DImMXafn.js";import"./Action-30gDnn-N.js";import"./context-DhGCm_gg.js";import"./useStatic-BFai5SqU.js";import"./getActionGroupSlot-DmO6NMOE.js";import"./Popover-NpXqfBvP.js";import"./OverlayTrigger-C1kGcuND.js";import"./Dialog-BroBw1Jq.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-CZdmdrug.js";import"./useControlledState-DjePt-lg.js";import"./Collection-BAXYBWcT.js";import"./CollectionBuilder-BP3fHMQL.js";import"./Separator-_mK8Veof.js";import"./SelectionManager-DyB3dcXv.js";import"./useEvent-DKzf63YQ.js";import"./useCollator-Dka9gyz6.js";import"./FocusScope-C3Hgy8Ha.js";import"./VisuallyHidden-Drr3U20F.js";import"./DialogTriggerView-Dpn7O2QF.js";import"./Switch-U8ztj5i2.js";import"./Label-BL8aw6G7.js";import"./useToggleState-CYLJPHYV.js";import"./useFormReset-Cri5RZCQ.js";import"./Overlay-CvEIDgmD.js";import"./Header-R0nPzTMj.js";import"./ButtonView-B28zEz_b.js";import"./Heading-BIZi0BTW.js";const $r={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},n={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(f=a.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,k,T;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(k=n.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{a as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,$r as default};
