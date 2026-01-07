import{j as r}from"./iframe-Cz8_C8zY.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-DLbRRuK1.js";import{L as m}from"./Link-eNCbHXBt.js";import{H as s}from"./HeaderNavigation-DzN591Y4.js";import{B as o}from"./Button-D15OVnQK.js";import{T as p}from"./Text-YjLUuftS.js";import{I as h}from"./Image-DmhcotWX.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-T8rUKbm6.js";import{C as M,M as c}from"./MenuItem-m3-E5JXa.js";import{C as I}from"./ContextMenuTrigger-9SzqOGa8.js";import"./ContextMenuSection-DUguC81d.js";import{a as T,M as k}from"./Modal-R_fTX8kH.js";import{H}from"./Heading-4iah9onY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BcPJG4Ua.js";import"./index-Cdfsiuxw.js";import"./index-SrORw6vN.js";import"./remote-D3nX27fk.js";import"./useLocalizedStringFormatter-Bo3Sbs5c.js";import"./context-VkDhZA-x.js";import"./utils-BAKlH2Lm.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DcZz-lB5.js";import"./useFocus-DFbFm1Xx.js";import"./useFocusRing-BDmU1dd9.js";import"./useFocusable-CJ-4fYj7.js";import"./dynamic-CeA3emBk.js";import"./LoadingSpinner-ClQMAkzE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-7cKgwoPB.js";import"./ProgressBar-CyaO-AON.js";import"./Label-2kcHPH94.js";import"./Hidden-CWAqagDm.js";import"./useLabel-BFm9pXXT.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B6rfwAqc.js";import"./EmulatedBoldText-Dt-OzvRV.js";import"./Text-Cr087Rh_.js";import"./AlertIcon-ljfi56tv.js";import"./Action-aXgHP_6u.js";import"./context-usF9YeFM.js";import"./useStatic-DFVrJYQp.js";import"./getActionGroupSlot-DD9h-bxs.js";import"./Popover-BRwT-TU7.js";import"./useOverlayController-BjnNyR7e.js";import"./OverlayContextProvider-DHHLRya5.js";import"./Dialog-DK4i5yRx.js";import"./RSPContexts-CQQaQyDU.js";import"./OverlayArrow-CwaEkqIl.js";import"./useControlledState-C0o23ioH.js";import"./Collection-2S6_FH7n.js";import"./CollectionBuilder-CWbLFvvU.js";import"./SelectionIndicator-DD4cK7So.js";import"./Separator-2dOH-BB_.js";import"./SelectionManager-C5vFB_ZW.js";import"./useEvent-Wcg6Cj6E.js";import"./useCollator-B9bMczBX.js";import"./FocusScope-DR3pULV0.js";import"./VisuallyHidden-7uh1Rm92.js";import"./Switch-D-udB-Sn.js";import"./useFieldComponent--MNREdev.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DBpeo4lJ.js";import"./useFormReset-CSPeTQLr.js";import"./OverlayTrigger-KjIeYBhC.js";import"./DialogTriggerView-CNil2s1m.js";import"./Overlay-LB6DImAZ.js";import"./ButtonView-CSt-ab9V.js";import"./Flex-zCzZT4DU.js";import"./Heading-DjrC0KPL.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
