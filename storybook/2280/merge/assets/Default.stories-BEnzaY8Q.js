import{j as r}from"./iframe-Cx5kJuuA.js";import{q as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-BDhnLpaV.js";import{L as m}from"./Link-CczK6Q9j.js";import{H as s}from"./HeaderNavigation-D7mRCFpt.js";import{B as o}from"./Button-OP9_q8AM.js";import{T as p}from"./Text-C98Jvmov.js";import{I as h}from"./Image-BZQf9yl4.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Bb6YmmXB.js";import{C as M,M as c}from"./ContextMenu-pXj2LRw_.js";import{C as I}from"./ContextMenuTrigger-D__wlTjl.js";import"./ContextMenuSection-DO6s1iXZ.js";import{a as T,M as k}from"./Modal-DCIAg7qM.js";import{H}from"./Heading-p9Lbmv6e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CLOWDrbo.js";import"./index-DK83sfEz.js";import"./index-BqoyVlZ7.js";import"./remote-C9UyjJTP.js";import"./useLocalizedStringFormatter-CIuieC62.js";import"./context-CpMzWCEP.js";import"./utils-Nk4paMN-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DbL3EqSH.js";import"./usePress-LbgF0OFY.js";import"./useFocusRing-idhb0ztA.js";import"./useFocusable-BtlUXhgP.js";import"./dynamic-RASAkScQ.js";import"./LoadingSpinner-BWQXNo8s.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BlKGeUP9.js";import"./ProgressBar-DpP1vNCR.js";import"./Label-DPB2sN32.js";import"./Hidden-BIWwaIRP.js";import"./useLabel-B4Wunpgz.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D-pbaBij.js";import"./EmulatedBoldText--C3vSC84.js";import"./Text-CA_aswYo.js";import"./AlertIcon-DvMPToF_.js";import"./Switch-Iy5Fe4QN.js";import"./useFieldComponent-DpBpP7du.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Cl2cpZed.js";import"./useFormReset-roVUmu5c.js";import"./useControlledState-D1xezhK5.js";import"./VisuallyHidden-i8gu61hs.js";import"./Dialog-CDKKMn1j.js";import"./RSPContexts-CFLmy0zp.js";import"./OverlayArrow-BNHP_74G.js";import"./Collection-B4Kq3uAS.js";import"./CollectionBuilder-CZTuuany.js";import"./SelectionIndicator-Dp8Rqhcc.js";import"./Separator-e9wjh8FO.js";import"./SelectionManager-BVVbqoWQ.js";import"./useEvent-3su7RyU0.js";import"./useCollator-BUzaHxjg.js";import"./FocusScope-wgzi2f-G.js";import"./Action-CnBQ_Jk4.js";import"./context-BmiLu6TN.js";import"./useStatic-C9KIiqww.js";import"./getActionGroupSlot-BGN_K6ot.js";import"./Popover-Bzh2FLih.js";import"./useOverlayController-UN8cxawL.js";import"./OverlayContextProvider-MJQePfMZ.js";import"./OverlayTrigger-CDfftEDM.js";import"./DialogTriggerView-DEk7zUV4.js";import"./Overlay-jvNfjsMj.js";import"./ButtonView-CiX34n3K.js";import"./Flex-BleQ3ZdG.js";import"./Heading-BkX6j8w8.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,wr as __namedExportsOrder,Zr as default};
