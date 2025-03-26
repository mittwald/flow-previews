import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CXcpQZ5J.js";import"./IconApp-C5KCAdlI.js";import{l as B,m as H,h as S,n as v,o as C}from"./IconWarning-C6q-vt44.js";import{L as m}from"./Link-BSilDyVR.js";import{H as s}from"./HeaderNavigation-DVtI-F-_.js";import{B as o}from"./Button-DoxNqpU5.js";import{T as p}from"./Text-Dr5MNJ9m.js";import{I as L}from"./Image-RII0nsTh.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-wJbs4k8b.js";import{a as b,C as D,M as c}from"./ContextMenuContent-C7QppDXV.js";import"./ContextMenuSection-BGfGuiMH.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-D0te77Zo.js";import{H as W}from"./Heading-JTZ2bzsA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxhHHjOl.js";import"./index-_FZDHFZo.js";import"./index-DJQWtO6Q.js";import"./index-sbGzhXso.js";import"./useLocalizedStringFormatter-BQtswni5.js";import"./utils-D_n-6U4k.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DKvzVrwU.js";import"./useFocus-DPMzGzIF.js";import"./useFocusRing-C5Ht9MUl.js";import"./useFocusable-C54KMRcY.js";import"./dynamic-DKDa4OpU.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-C8RokD4H.js";import"./Button-BcgzNVYq.js";import"./ProgressBar-8nsGDrqI.js";import"./Label-D7zTyyav.js";import"./Hidden-DtYLaSTT.js";import"./useLabel-BoT2JKOr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./Text-BUuVncJZ.js";import"./react-children-utilities-DD9PhoP7.js";import"./Action-BEVxohwb.js";import"./context-DaPO0HZf.js";import"./useStatic-RnO7WcrC.js";import"./getActionGroupSlot-BilYt8La.js";import"./Popover-C7hXwPPn.js";import"./OverlayTrigger-Dv9azQvo.js";import"./Dialog-D9rW5YgD.js";import"./RSPContexts-C2SW_8A9.js";import"./OverlayArrow-CB6H_PzN.js";import"./Collection-D2C_lGLj.js";import"./CollectionBuilder-B3MPjffQ.js";import"./Separator-MF6Pdxex.js";import"./useOverlayTriggerState-EP699KjE.js";import"./useControlledState-CHe-wEx1.js";import"./SelectionManager-DLUrYsh7.js";import"./useEvent-9NPw0H85.js";import"./useCollator-BSqHj9jo.js";import"./FocusScope-ienAdI6u.js";import"./VisuallyHidden-nUs_Pnf6.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-gOfyQuAV.js";import"./Switch-BpWnRt3O.js";import"./Label-BlFJqu_U.js";import"./useToggleState-BTAejZnG.js";import"./useFormReset-C7M_aUQL.js";import"./Overlay-DjlPbzgy.js";import"./Header-CUv3SiwW.js";import"./ButtonView-CTc6QzmY.js";import"./Heading-ChI_1Pt6.js";const to={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},parameters:{backgrounds:A}},a={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(T=(k=a.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const eo=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,a as Light,e as WithContextMenu,eo as __namedExportsOrder,to as default};
