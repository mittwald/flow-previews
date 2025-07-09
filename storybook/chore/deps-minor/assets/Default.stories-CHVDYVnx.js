import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BdpSHsi2.js";import{o as B,p as H,j as S,q as v,r as C}from"./IconWarning-BxSHatUa.js";import{L as m}from"./Link-AXERNp7D.js";import{H as s}from"./HeaderNavigation-CQcVXNkw.js";import{B as o}from"./Button-CsT5fqlo.js";import{T as p}from"./Text-Crhuefb8.js";import{I as L}from"./Image-CSucajho.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-s20DeMvp.js";import{a as b,C as D,M as c}from"./ContextMenuContent-B0JIoRWY.js";import"./ContextMenuSection-BXxWZX6u.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-D1qQbDnV.js";import{H as W}from"./Heading-C0MWwxX5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BAMY2Nnw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B5pC6jRM.js";import"./mergeRefs-f9wmNE8z.js";import"./iframe-CCYGid9a.js";import"./index-DU8gk_nc.js";import"./index-lEnnwJps.js";import"./useLocalizedStringFormatter-DnyHa0G6.js";import"./context-b6TG5uw0.js";import"./utils-CNUJJGcD.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DWaDT6O_.js";import"./useFocus-Ck8e1iB7.js";import"./useFocusRing-BmK03SYd.js";import"./useFocusable-CxpMFfxV.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-gqh-niup.js";import"./Button-Cg-C5DwG.js";import"./ProgressBar-BKoZZ6mR.js";import"./Label-DsLtIi5U.js";import"./Hidden-RoZfe91Z.js";import"./useLabel-XC8v3O7U.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-BJ9sUP_l.js";import"./AlertIcon-C4RkWPLe.js";import"./Action-DPMdhu3a.js";import"./context-CNpCe4fH.js";import"./useStatic-BrcsRG5M.js";import"./getActionGroupSlot-DHp7XyK0.js";import"./Popover-DfY01zsG.js";import"./DialogTriggerView-B9XppV6V.js";import"./Dialog-9HjW71o-.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-BVOH5h02.js";import"./useControlledState-rjpdN6qd.js";import"./Collection-DM8z4Ehe.js";import"./CollectionBuilder-CnXQkgAs.js";import"./Separator-COTp_Dm9.js";import"./Input--iZvazXr.js";import"./SearchField-D6iOCfE6.js";import"./FieldError-Dhym38A1.js";import"./Form-CXVBffIi.js";import"./Group-ryYih4mY.js";import"./useTextField-fBojglfp.js";import"./useFormReset-Tdit5Ane.js";import"./TextField-DnxvqTg5.js";import"./SelectionManager-DHrlGRPM.js";import"./useEvent-Bvgrsh8W.js";import"./useCollator-DUFyk2vx.js";import"./FocusScope-BN4baDIG.js";import"./VisuallyHidden-QAya5EjI.js";import"./Switch-Djj3O2Hw.js";import"./Label-CYiMANhq.js";import"./useToggleState-2g6osGuI.js";import"./Overlay-B6RUfCPl.js";import"./Header-D-tlPcMR.js";import"./ButtonView-B1d6NlZ0.js";import"./Heading-glOOglw2.js";const so={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},parameters:{backgrounds:A}},a={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(T=(k=a.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const mo=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,a as Light,e as WithContextMenu,mo as __namedExportsOrder,so as default};
