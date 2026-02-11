import{j as r}from"./iframe-lphi5Fln.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Dv_szZY_.js";import{L as m}from"./Link-D6SscMcU.js";import{H as s}from"./HeaderNavigation-B_8qKyb3.js";import{B as o}from"./Button-Luzxnqg_.js";import{T as p}from"./Text-DhRxTRp1.js";import{I as h}from"./Image-BvlB1P2-.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-kIS_rMIm.js";import{C as M,M as c}from"./MenuItem-CQ2i0QJm.js";import{C as I}from"./ContextMenuTrigger-D1hDWL_K.js";import"./ContextMenuSection-WR0YVO70.js";import{a as T,M as k}from"./Modal-ms22Z7Kx.js";import{H}from"./Heading-CdmYtBXv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D0jdWuAG.js";import"./index-BDdjr3yJ.js";import"./index-BirbEfWe.js";import"./remote-B9VD8JHH.js";import"./useLocalizedStringFormatter-ZZw30b7A.js";import"./context-hul-JKEa.js";import"./utils-Is-sFETw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BYwX3hbJ.js";import"./usePress-ByR9A8gc.js";import"./useFocusRing-y2NKP0hv.js";import"./useFocusable-CWG73OOy.js";import"./dynamic-Dz56l0zD.js";import"./LoadingSpinner-Bhcgxzhg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DBLw-vMJ.js";import"./ProgressBar-BlIkh8Rr.js";import"./Label-mBHJjPT6.js";import"./Hidden-B_Gq1hkl.js";import"./useLabel-B3jPjt5T.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DxP0Rs6D.js";import"./EmulatedBoldText-5wQJnzOA.js";import"./Text-CwPOMTFI.js";import"./AlertIcon-Tp_Bhr3n.js";import"./Action-DdOAmdm4.js";import"./context-D_Cvxd07.js";import"./useStatic-DoydbngC.js";import"./getActionGroupSlot-4pUh-G0A.js";import"./Popover-BEcdv2wn.js";import"./useOverlayController-DEMdk2HW.js";import"./OverlayContextProvider-Cdtv7zJY.js";import"./Dialog-any5Q92a.js";import"./RSPContexts-D5Dv-vEP.js";import"./OverlayArrow-CILdtqTg.js";import"./useControlledState-D2ulvinQ.js";import"./Collection-CsOde2Lf.js";import"./CollectionBuilder-Cmca66tQ.js";import"./SelectionIndicator-Dfc-TPkO.js";import"./Separator-DfUDQJPV.js";import"./SelectionManager-DEgIHQ63.js";import"./useEvent-CjOYrEf7.js";import"./useCollator-wUqkBaab.js";import"./FocusScope-DRoVwcjL.js";import"./VisuallyHidden-DjAmLvSg.js";import"./Switch-5q9ImdFK.js";import"./useFieldComponent-6mmayeW0.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Cf5C5cId.js";import"./useFormReset-CSRdRe02.js";import"./OverlayTrigger-DqdhJFXL.js";import"./DialogTriggerView-CJcwGl5z.js";import"./Overlay-D1Dl2bkE.js";import"./ButtonView-Cs6C0-sY.js";import"./Flex-CXk3xCmY.js";import"./Heading-DnWdAz5V.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
