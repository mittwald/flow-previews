import{j as r}from"./iframe-BmaCy5vn.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-HxJndVZz.js";import{L as m}from"./Link-tHmjwLpd.js";import{H as s}from"./HeaderNavigation-BaCHsO9G.js";import{B as o}from"./Button-D_WPZvgQ.js";import{T as p}from"./Text-Bb5YosKE.js";import{I as C}from"./Image-0f2W24Hp.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-GOoJ5-jJ.js";import{a as y,C as A,M as c}from"./ContextMenuContent-0Iub-tCL.js";import"./ContextMenuSection-3hXHFRCj.js";import{a as D,M as E}from"./Modal-BDWsXfAt.js";import{H as G}from"./Heading-DvU7HY66.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cdtu9ZvQ.js";import"./mergeRefs-B-jDhE92.js";import"./index-DPf4rLTQ.js";import"./useLocalizedStringFormatter-Bee7TgYK.js";import"./context-D74MXKTM.js";import"./utils-BTcDldbE.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-D_L0SfOg.js";import"./useFocus-eJJI3D_B.js";import"./useFocusRing-BIF3mfAv.js";import"./useFocusable-BZM-anb5.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-ht0ZG28N.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-wePQNGHF.js";import"./ProgressBar-DbkKYMEg.js";import"./Label-v3v2JpRx.js";import"./Hidden-DFOfTeRc.js";import"./useLabel-aIW9IeHZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CHe_8eCl.js";import"./EmulatedBoldText-6eMdCTCE.js";import"./Text-DKW9AlZS.js";import"./AlertIcon-DQaZLe-4.js";import"./Action-DY7JPpLy.js";import"./context-unxNYjwy.js";import"./useStatic-CZNYuNH3.js";import"./getActionGroupSlot-BjpD5yQ9.js";import"./Popover-DJ-DOiR3.js";import"./DialogTriggerView-Cgh3ruvs.js";import"./Dialog-DNzI_GfM.js";import"./RSPContexts-BWdUGPyC.js";import"./OverlayArrow-DPRWr8HF.js";import"./useControlledState-D7fTNmKi.js";import"./Collection-De-LJyRM.js";import"./CollectionBuilder-DYux32p_.js";import"./Separator-C4UM9Z4C.js";import"./Group-BQQ9lk60.js";import"./SearchField-CGzmXx6T.js";import"./FieldError-DrLNSIg1.js";import"./Form-JYTBzchK.js";import"./useTextField-DWi3otFd.js";import"./useFormReset-BOYVXvui.js";import"./TextField-BuSg5oYg.js";import"./useEvent-BVPjBT0Y.js";import"./SelectionManager-YuLIOZci.js";import"./useCollator-BSPhXtyK.js";import"./FocusScope-BP1WICTq.js";import"./VisuallyHidden-CbssR0xZ.js";import"./Switch-B8OlbrtJ.js";import"./Label-C9e3OZeO.js";import"./useToggleState-BAvX9-GC.js";import"./Overlay-DnENsMi3.js";import"./ButtonView-BmrTRwNl.js";import"./Heading---3yDhu1.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
