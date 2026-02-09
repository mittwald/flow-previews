import{j as r}from"./iframe-CJJ5mYnn.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-7VhmiBC1.js";import{L as m}from"./Link-tqtFSZsm.js";import{H as s}from"./HeaderNavigation-DeORw7xI.js";import{B as o}from"./Button-Cm9iNCfL.js";import{T as p}from"./Text-DETIdekS.js";import{I as h}from"./Image-BxAG45qN.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DPBaaRsP.js";import{C as M,M as c}from"./MenuItem-Cmz9XULR.js";import{C as I}from"./ContextMenuTrigger-BGsLleQ5.js";import"./ContextMenuSection-JlR6lzy2.js";import{a as T,M as k}from"./Modal-6LP4rsU3.js";import{H}from"./Heading-L7ubE5sI.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BiwmgULL.js";import"./index-BXYeEKBx.js";import"./index-BAQeQlIi.js";import"./remote-__48vje9.js";import"./useLocalizedStringFormatter-DftyoPOP.js";import"./context-DMBLfBJz.js";import"./utils-CzEQVu_B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CcXCF9Et.js";import"./usePress-BjSa1aTn.js";import"./useFocusRing-DJCeTTlI.js";import"./useFocusable-BrXzadpt.js";import"./dynamic-CBA_L5x6.js";import"./LoadingSpinner-BkLfehTA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DBs8-zE9.js";import"./ProgressBar-DEVhhcDS.js";import"./Label-Crm05hod.js";import"./Hidden-AXn-SW1d.js";import"./useLabel-x08fx3rG.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Dno-4bzG.js";import"./EmulatedBoldText-Ddbav1xv.js";import"./Text-C_ulbvRg.js";import"./AlertIcon-CvbzdPY4.js";import"./Action-DnpS_czG.js";import"./context-B6BNwR5M.js";import"./useStatic-DKMjC4UR.js";import"./getActionGroupSlot-BsVn5MxR.js";import"./Popover-CSygdiS-.js";import"./useOverlayController-Bt3E6YJk.js";import"./OverlayContextProvider-DxcnF3G9.js";import"./Dialog-BJQKxFLq.js";import"./RSPContexts-BTWN0Dkl.js";import"./OverlayArrow-B9C6jKaR.js";import"./useControlledState-Bk661CCw.js";import"./Collection-B0Oi5e2R.js";import"./CollectionBuilder-DM6FVurg.js";import"./SelectionIndicator-t_QTWROb.js";import"./Separator-Ba2IdZvX.js";import"./SelectionManager-h8Xia05C.js";import"./useEvent-B7gpfAjJ.js";import"./useCollator-BLS40MVU.js";import"./FocusScope-Bpw-7kqG.js";import"./VisuallyHidden-CdWE-b-g.js";import"./Switch-DiHKOfXs.js";import"./useFieldComponent-DJ8W8blY.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DlLXX_lc.js";import"./useFormReset-Bwb9lNn2.js";import"./OverlayTrigger-BPzqtZtz.js";import"./DialogTriggerView-C73SnW8B.js";import"./Overlay-BvCI53Wn.js";import"./ButtonView-BZWbi-p0.js";import"./Flex-CQb7MdCe.js";import"./Heading-BM0-1eUi.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
