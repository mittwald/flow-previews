import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-F2Fta7eo.js";import{n as B,o as H,i as S,p as v,q as C}from"./IconWarning-JHNVKD2U.js";import{L as m}from"./Link-qZmwrJMq.js";import{H as s}from"./HeaderNavigation-DWosMbl1.js";import{B as o}from"./Button--1WLxUl1.js";import{T as p}from"./Text-C9-UAqt7.js";import{I as L}from"./Image-CAcjAH5w.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-TyfQiLdP.js";import{a as b,C as D,M as c}from"./ContextMenuContent-6MabZTyg.js";import"./ContextMenuSection-Bbxa0KP_.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-CXlbyq1x.js";import{H as W}from"./Heading-HpIft6AR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CGP4rIIM.js";import"./mergeRefs-12BfVTtv.js";import"./index-GHXRqlzO.js";import"./index-FKzx4Va7.js";import"./useLocalizedStringFormatter-QhihLYa3.js";import"./utils-D0arg4qg.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-heCNvahi.js";import"./useFocus-CPhYqd-d.js";import"./useFocusRing-4oM8aI2c.js";import"./useFocusable-Tcmfb9SA.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-IrCiETzR.js";import"./Button-DCaCfXLp.js";import"./ProgressBar-bhmU_ZvQ.js";import"./Label-wLZ3I4V9.js";import"./Hidden-aaDrlwOM.js";import"./useLabel-DB0A2tZF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DovK0xj5.js";import"./Text-AN1gvCNp.js";import"./react-children-utilities-OrI0BXp-.js";import"./AlertIcon-C29Z4cTI.js";import"./Action-CXU1vJUm.js";import"./context-Df4xkzhD.js";import"./useStatic-CeLwg7Tb.js";import"./getActionGroupSlot-Cwkd5BAj.js";import"./Popover-0DyzWa-X.js";import"./OverlayTrigger-GuqkqyKk.js";import"./Dialog-BBdTn5Uc.js";import"./RSPContexts-DhZDYkwS.js";import"./OverlayArrow-ULot_6Ir.js";import"./Collection-CutN93xp.js";import"./CollectionBuilder-D5vZPvsR.js";import"./Separator-YWiDMMN1.js";import"./useOverlayTriggerState-Bt-3O924.js";import"./useControlledState-15AFXVxl.js";import"./SelectionManager-1l7b-eWb.js";import"./useEvent-BL4Dc6Ef.js";import"./useCollator-4BrhQKp8.js";import"./FocusScope-BlLq5c4F.js";import"./VisuallyHidden-LoYkyM-T.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView--8hLSldg.js";import"./Switch-BwGszInZ.js";import"./Label-D4btQWmC.js";import"./useToggleState-DOD4-d8r.js";import"./useFormReset-hDk0Ijlo.js";import"./Overlay-Bf_95c7E.js";import"./Header-W-UveeEH.js";import"./ButtonView-DkydkyON.js";import"./Heading-AP9WPpJD.js";const oo={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},parameters:{backgrounds:A}},a={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
