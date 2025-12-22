import{j as r}from"./iframe-XJIuIQsX.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-Dh1UuZN-.js";import{L as m}from"./Link-D8dU5LFf.js";import{H as s}from"./HeaderNavigation-wgCipr0S.js";import{B as o}from"./Button-B3qcLgg7.js";import{T as p}from"./Text-CrMkSLGe.js";import{I as h}from"./Image-CaLdAgKW.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-BqO7Cmqn.js";import{C as M,M as c}from"./MenuItem-Dn1cq_U2.js";import{C as I}from"./ContextMenuTrigger-D8lefVnY.js";import"./ContextMenuSection-Bgb904Cq.js";import{a as T,M as k}from"./Modal-D9QknMoh.js";import{H}from"./Heading-M0mrZOb3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BaQJj-Fe.js";import"./index-BFrTfb9P.js";import"./index-D1QpPuaY.js";import"./remote-Ep0bJUq6.js";import"./useLocalizedStringFormatter-CdJGeOAf.js";import"./context-DW91oCRu.js";import"./utils-OSbsBMtV.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DEhEh88f.js";import"./useFocus-CATpB0h3.js";import"./useFocusRing-CeYeFZfu.js";import"./useFocusable-DTUbS3BZ.js";import"./dynamic-BLJCE7jR.js";import"./LoadingSpinner-CuoS48qC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BAG3sHuP.js";import"./ProgressBar-BrwhHLJj.js";import"./Label-1nVOodib.js";import"./Hidden-CYqdvOeA.js";import"./useLabel-B1JuXYfT.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BhoN5hvb.js";import"./EmulatedBoldText-CPYC_Ehx.js";import"./Text-CQ_rpqob.js";import"./AlertIcon-u3QLPLoz.js";import"./Action-Dpd9i1rx.js";import"./context-BdOjCQgT.js";import"./useStatic-Badjbl0n.js";import"./getActionGroupSlot-Cw46BERC.js";import"./Popover-OQKS3awK.js";import"./useOverlayController-Bcgt-d4I.js";import"./OverlayContextProvider-C-39O9JG.js";import"./Dialog-DrSVAvJg.js";import"./RSPContexts-CKZ7RQV4.js";import"./OverlayArrow-Coj8W95X.js";import"./useControlledState-B6b60Ty3.js";import"./Collection-DBAq6tm-.js";import"./CollectionBuilder-DFJ49rUK.js";import"./SelectionIndicator-rwMeyIsD.js";import"./Separator-5XoV32yu.js";import"./SelectionManager-BTpprE_r.js";import"./useEvent-c3AV6770.js";import"./useCollator-pMxc4jG8.js";import"./FocusScope-XmTgMg9O.js";import"./VisuallyHidden-ClcaDoKJ.js";import"./Switch-DmXPxfoL.js";import"./useFieldComponent-HT5XfbIG.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ChCPhXsy.js";import"./useFormReset-_i9wmexA.js";import"./OverlayTrigger-CKuY1bLi.js";import"./DialogTriggerView-Bb_gJxRh.js";import"./Overlay-CNeSHvrZ.js";import"./ButtonView-cg3Y_u88.js";import"./Flex-ZtB7MWw_.js";import"./Heading-BJR3kI60.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
