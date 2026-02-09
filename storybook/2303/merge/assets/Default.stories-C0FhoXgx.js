import{j as r}from"./iframe-BTP_Z9Sf.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-CwZb39At.js";import{L as m}from"./Link-C9fmLDrA.js";import{H as s}from"./HeaderNavigation-BOKH3_2e.js";import{B as o}from"./Button-er0RkDrE.js";import{T as p}from"./Text-Cq5MQ8wu.js";import{I as h}from"./Image-D-QTl6CW.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BMyoTHcf.js";import{C as M,M as c}from"./MenuItem-wWijrMD7.js";import{C as I}from"./ContextMenuTrigger-CpPTP_VY.js";import"./ContextMenuSection-De_H5Wjl.js";import{a as T,M as k}from"./Modal-WXKBz1ki.js";import{H}from"./Heading-tBPre37B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DvBALJVI.js";import"./index-z_6Cto56.js";import"./index-E_qagHnK.js";import"./remote-BmAp8UvO.js";import"./useLocalizedStringFormatter-DvZZD1YW.js";import"./context-BBaC2IfM.js";import"./utils-DP1LA6WE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BU1lOliM.js";import"./usePress-BnZLj0Nc.js";import"./useFocusRing-CQvdF7rp.js";import"./useFocusable-Hlf8Yc9h.js";import"./dynamic-LcJrXyvC.js";import"./LoadingSpinner-Cv-igvht.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DgJw7YNb.js";import"./ProgressBar-CBYSqGBG.js";import"./Label-PTTOxDPw.js";import"./Hidden-7cYXeHtZ.js";import"./useLabel-Cpmi3JfU.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-eyJ8FPIK.js";import"./EmulatedBoldText-BkuV9i5t.js";import"./Text-CZ1YR4oj.js";import"./AlertIcon-BLTDYNdz.js";import"./Action-CBjIM5JV.js";import"./context-BwxZaZwM.js";import"./useStatic-kc5QKD7I.js";import"./getActionGroupSlot-V7kcySO7.js";import"./Popover-6hqQcqfJ.js";import"./useOverlayController-BkO0277u.js";import"./OverlayContextProvider-qUQ07J32.js";import"./Dialog-DITwbnCq.js";import"./RSPContexts-Bn1hDyBd.js";import"./OverlayArrow-DzMljQ2A.js";import"./useControlledState-B5h2rUtG.js";import"./Collection-DSvrrKnp.js";import"./CollectionBuilder-By7qHrZF.js";import"./SelectionIndicator-Dze6faSJ.js";import"./Separator-DTcX24DQ.js";import"./SelectionManager-Cw7zB5E7.js";import"./useEvent-C591_3g7.js";import"./useCollator-BHL0tWyU.js";import"./FocusScope-B2nLTMyD.js";import"./VisuallyHidden-BWM4WxkJ.js";import"./Switch-nTWd4UMx.js";import"./useFieldComponent-Da-vFXDP.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BvD2wu9z.js";import"./useFormReset-Bo1Ib9da.js";import"./OverlayTrigger-B5XE0ce4.js";import"./DialogTriggerView-KlP4GNG7.js";import"./Overlay-xUqNDyhN.js";import"./ButtonView-B2TbsKhv.js";import"./Flex-VLxlCjmc.js";import"./Heading-CcadeVc2.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
