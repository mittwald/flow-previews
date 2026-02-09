import{j as r}from"./iframe-nlVW-CPZ.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-VZ7ITFqu.js";import{L as m}from"./Link-Dyc1bKEd.js";import{H as s}from"./HeaderNavigation-DnGwTY68.js";import{B as o}from"./Button-_Sn69Jgj.js";import{T as p}from"./Text-BzuDjaz9.js";import{I as h}from"./Image-fdFC8UUM.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Y56tKdR0.js";import{C as M,M as c}from"./MenuItem-CMCE01Iz.js";import{C as I}from"./ContextMenuTrigger-CW7DzLn9.js";import"./ContextMenuSection-mf_2MmNA.js";import{a as T,M as k}from"./Modal-J1gXFV2u.js";import{H}from"./Heading-BvsEXDXR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./index-DrBjklCk.js";import"./remote-D3GclicH.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./context-CIGB7i0H.js";import"./utils-CyuEFqip.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CD1ZzMvo.js";import"./usePress-BSHzPeES.js";import"./useFocusRing-0Z36i33d.js";import"./useFocusable-DHxyzauV.js";import"./dynamic-Dsm5lbml.js";import"./LoadingSpinner-X7Xu_AAn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BXbNlZWB.js";import"./ProgressBar-CIT85dGK.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./useLabel-DUbax7la.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BoEfPalF.js";import"./EmulatedBoldText-DYHVi4jR.js";import"./Text-sEy-KTn9.js";import"./AlertIcon-Dr5phtoY.js";import"./Action-VhJyCQWd.js";import"./context-DJb9q1Xr.js";import"./useStatic-C5UephlJ.js";import"./getActionGroupSlot-C4UrWJhX.js";import"./Popover-D2O_yi7O.js";import"./useOverlayController-52PC3yWy.js";import"./OverlayContextProvider-CMO4Tng6.js";import"./Dialog-zXGOOBEm.js";import"./RSPContexts-DlUCcPRc.js";import"./OverlayArrow-xJgx9UYQ.js";import"./useControlledState-ywoEmBU4.js";import"./Collection-VsHvURZ5.js";import"./CollectionBuilder-BC18ROL9.js";import"./SelectionIndicator-DdhOYUUY.js";import"./Separator-Ei4AiFvo.js";import"./SelectionManager-BMKEE2dl.js";import"./useEvent-C_UmhbA0.js";import"./useCollator-CE-FIC6l.js";import"./FocusScope-DihhZg9P.js";import"./VisuallyHidden-44O2XzGD.js";import"./Switch-C8pqNJdk.js";import"./useFieldComponent-DOzg870F.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DZhZWEOQ.js";import"./useFormReset-J8eUPjf8.js";import"./OverlayTrigger-DTUPogrt.js";import"./DialogTriggerView-swymmKh6.js";import"./Overlay-VXNN9zTW.js";import"./ButtonView-CLlJ09F8.js";import"./Flex-VFzoxwmZ.js";import"./Heading-Bfj0TRqM.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,qr as default};
