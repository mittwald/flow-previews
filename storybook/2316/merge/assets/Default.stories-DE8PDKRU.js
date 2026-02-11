import{j as r}from"./iframe-BBLgQM8W.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-CmmOPW6y.js";import{L as m}from"./Link-CxVyNRrB.js";import{H as s}from"./HeaderNavigation-DUYVaqhd.js";import{B as o}from"./Button-B_d3OkSN.js";import{T as p}from"./Text-DyzGue3k.js";import{I as h}from"./Image-DadNFFa_.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-O_4kbJ85.js";import{C as M,M as c}from"./MenuItem-BNBBkMND.js";import{C as I}from"./ContextMenuTrigger-BJ0iIBGC.js";import"./ContextMenuSection-DowsXKqD.js";import{a as T,M as k}from"./Modal-DvnoEd9r.js";import{H}from"./Heading-Ckzm0pET.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D-0ABlaS.js";import"./index-DIoQv3Yu.js";import"./index-CC4aSS2B.js";import"./remote-Vne7hGXH.js";import"./useLocalizedStringFormatter-ndUPvi50.js";import"./context-CbfWsJFN.js";import"./utils-Bzwl2RbX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-atMo-T8H.js";import"./usePress-DXblhpXj.js";import"./useFocusRing-XNEcT-2-.js";import"./useFocusable-BlOp3ek5.js";import"./dynamic-De16JUVi.js";import"./LoadingSpinner-CfkxbS8M.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-M7FHgNE8.js";import"./ProgressBar-C8xfeLyO.js";import"./Label-DjOsKLLo.js";import"./Hidden-CcHv8P9l.js";import"./useLabel-65Ti_lew.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DI7yhJk5.js";import"./EmulatedBoldText-BZaUBYn6.js";import"./Text-C-vmddAy.js";import"./AlertIcon-CiXM2S_P.js";import"./Action-vczYGY_C.js";import"./context-On8QMk-S.js";import"./useStatic-DeJLZZ0I.js";import"./getActionGroupSlot-BNVlq3z6.js";import"./Popover-B9sG1hlB.js";import"./useOverlayController-DLo4JLQx.js";import"./OverlayContextProvider-U24Exh3e.js";import"./Dialog-ErohAvYc.js";import"./RSPContexts-CYvfEZEC.js";import"./OverlayArrow-DOWztXxW.js";import"./useControlledState-Cx-WZngS.js";import"./Collection-D0FsBWET.js";import"./CollectionBuilder-B0O9WQSu.js";import"./SelectionIndicator-CxHxHFYG.js";import"./Separator-Du5IBTyX.js";import"./SelectionManager-Qclabrtm.js";import"./useEvent-xi19_WIE.js";import"./useCollator--gNzNCc1.js";import"./FocusScope-BuBo0u5V.js";import"./VisuallyHidden-DReBsRIr.js";import"./Switch-DEZHgyBs.js";import"./useFieldComponent-BfDJ4pJf.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Db4BOF7R.js";import"./useFormReset-4n7xFzn-.js";import"./OverlayTrigger-Qn4J4GR_.js";import"./DialogTriggerView-Dn2vmRix.js";import"./Overlay-BoucOeVu.js";import"./ButtonView-BpODKVdh.js";import"./Flex-nQpWTo1z.js";import"./Heading-xvL5txOz.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
