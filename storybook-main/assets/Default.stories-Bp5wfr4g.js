import{j as r}from"./iframe-BrcQhcwR.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-MWZFtagw.js";import{L as m}from"./Link-DW1OiTYF.js";import{H as s}from"./HeaderNavigation-oxxOVlcs.js";import{B as o}from"./Button-DdI6TSg5.js";import{T as p}from"./Text-PyhJCmvh.js";import{I as h}from"./Image-CgmIoTa5.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CCEN8Yyi.js";import{C as M,M as c}from"./MenuItem-bFZI35ri.js";import{C as I}from"./ContextMenuTrigger-DNzDU6WL.js";import"./ContextMenuSection-BV3yleYZ.js";import{a as T,M as k}from"./Modal-Ce_HwK8r.js";import{H}from"./Heading-DeF2rP0f.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-m6SyqnPg.js";import"./index-Del26Dy4.js";import"./index-CSUT2NCR.js";import"./remote-BHShYJ5P.js";import"./useLocalizedStringFormatter-hxpvTBNb.js";import"./context-DOSLHoOx.js";import"./utils-DM5Jp8EX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BKws8v7-.js";import"./usePress-BBaWFJWg.js";import"./useFocusRing-DEM6_VkF.js";import"./useFocusable-BcdgZhOs.js";import"./dynamic-CAxQXs-G.js";import"./LoadingSpinner-C-WbSXYT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CztCXt43.js";import"./ProgressBar-DhNSphWE.js";import"./Label-ChTBNZrK.js";import"./Hidden-D0_rVqY-.js";import"./useLabel-0hwKkY3Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BdJDgoMU.js";import"./EmulatedBoldText-Bbt3btdp.js";import"./Text-CzkXk5bL.js";import"./AlertIcon-CzBRtVHG.js";import"./Action-EPprNG1t.js";import"./context-C9I6Qco3.js";import"./useStatic-Cr39OxgC.js";import"./getActionGroupSlot-Dt2slLBi.js";import"./Popover-Z1FCFlzY.js";import"./useOverlayController-DMZANwi4.js";import"./OverlayContextProvider-BfPQJL_J.js";import"./Dialog-DAgI8QrG.js";import"./RSPContexts-CLcTs2D_.js";import"./OverlayArrow-DY7ECRqq.js";import"./useControlledState-DsUZezc6.js";import"./Collection-kTlo8aNF.js";import"./CollectionBuilder-DHL6mUJ2.js";import"./SelectionIndicator-Bi_ZzqWB.js";import"./Separator-BpDC4shb.js";import"./SelectionManager-B-CgmQdR.js";import"./useEvent-D8AEfF0F.js";import"./useCollator-DSAWxNmx.js";import"./FocusScope-CxLgpb_M.js";import"./VisuallyHidden-CIPoghQB.js";import"./Switch-DDBraJb2.js";import"./useFieldComponent-CsbQ-7mY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CC7Uki4s.js";import"./useFormReset-BHDJFB5Q.js";import"./OverlayTrigger-D_VcfVVD.js";import"./DialogTriggerView-BD3bRwl-.js";import"./Overlay-hHQaxHth.js";import"./ButtonView-B7ZIb4eI.js";import"./Flex-Dt4Rw9sR.js";import"./Heading-D_8LxtK-.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
