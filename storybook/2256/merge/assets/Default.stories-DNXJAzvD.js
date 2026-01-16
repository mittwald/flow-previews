import{j as r}from"./iframe-CIXg2wml.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-CiSujg9K.js";import{L as m}from"./Link-hyB-uv4w.js";import{H as s}from"./HeaderNavigation-CSlcEoDX.js";import{B as o}from"./Button-BNUMHVa-.js";import{T as p}from"./Text-ClE4EaJv.js";import{I as h}from"./Image-ByUXwVFP.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DwHlOaa1.js";import{C as M,M as c}from"./ContextMenu-DDI1GCKj.js";import{C as I}from"./ContextMenuTrigger-CfrI6N5Y.js";import"./ContextMenuSection-C_CrFgfB.js";import{a as T,M as k}from"./Modal-BeGAr8lh.js";import{H}from"./Heading-IDnu3Squ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-2SDDcL6i.js";import"./index-stwZ4S38.js";import"./index-CUACQQJf.js";import"./remote-8tD3tcl0.js";import"./useLocalizedStringFormatter-DQ68Yc1-.js";import"./context-TKY6ae7T.js";import"./utils-E3QCR4Ei.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-C_LDf41x.js";import"./useFocus-Xgz2P1v-.js";import"./useFocusRing-CJfArHTm.js";import"./useFocusable-LSbGRyyR.js";import"./dynamic-DkFDoLPd.js";import"./LoadingSpinner-DwfvHd6g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BbDeItRQ.js";import"./ProgressBar-CFDr9Wxg.js";import"./Label-DkYkYhBQ.js";import"./Hidden-CGz-Nf89.js";import"./useLabel-pvILaDrT.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CYeJE0Iy.js";import"./EmulatedBoldText--LsvyM20.js";import"./Text-BTcAnKOQ.js";import"./AlertIcon-DJUqjVOR.js";import"./Switch-DHew7IOY.js";import"./useFieldComponent-D7V8J4vf.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CFdCdm3H.js";import"./useFormReset-BWhLZN3-.js";import"./useControlledState-euBd3hty.js";import"./VisuallyHidden-XLC_SZ8x.js";import"./Dialog-f9GqGINB.js";import"./RSPContexts-CMEo-sGH.js";import"./OverlayArrow-Bgb8SBf8.js";import"./Collection-PnRWL8bH.js";import"./CollectionBuilder-CsxYH4iw.js";import"./SelectionIndicator-Ck0MHypk.js";import"./Separator-BD9AYapb.js";import"./SelectionManager-C-rzUvsK.js";import"./useEvent-D8tLlxQx.js";import"./useCollator-nDdvYdK7.js";import"./FocusScope-BVD53JA4.js";import"./Action-BuQCX6jm.js";import"./context-CXkwD4h5.js";import"./useStatic-CosBs7oI.js";import"./getActionGroupSlot-DDSDNzLp.js";import"./Popover-B98zkIIW.js";import"./useOverlayController-DihmuJIH.js";import"./OverlayContextProvider-BncgeVHa.js";import"./OverlayTrigger-Gn6syf8M.js";import"./DialogTriggerView-gYGIApn7.js";import"./Overlay-CXJ8C2jt.js";import"./ButtonView-BpZiG3F4.js";import"./Flex-Dk6AVH5K.js";import"./Heading-NdZmHCy8.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,zr as __namedExportsOrder,wr as default};
