import{j as r}from"./iframe-CdVpWnc8.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-Ba9_xFUh.js";import{L as m}from"./Link-I6ryM9ra.js";import{H as s}from"./HeaderNavigation-CDwboYm_.js";import{B as o}from"./Button-BYd_Eo9F.js";import{T as p}from"./Text-KDInGMjK.js";import{I as h}from"./Image-DinQpVtF.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DQ94gf96.js";import{C as M,M as c}from"./MenuItem-bNR6SRDN.js";import{C as I}from"./ContextMenuTrigger-Cr6GC5zX.js";import"./ContextMenuSection-CBva2Bvf.js";import{a as T,M as k}from"./Modal-BfSu_fBA.js";import{H}from"./Heading-6HXp4W0i.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./index-CPzHqOMO.js";import"./remote-BheCwFS8.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./context-Bg-StFGN.js";import"./utils-ClIic5nH.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DZX-xW1t.js";import"./usePress-CCAUNqmr.js";import"./useFocusRing-dkAGsBkQ.js";import"./useFocusable-CzSEJZTE.js";import"./dynamic-Dpbpwd3I.js";import"./LoadingSpinner-CjZME6JA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-skPPmItL.js";import"./ProgressBar-Dg8vamQS.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./useLabel-BKXkodj0.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CWGq_9Zm.js";import"./EmulatedBoldText-BFXdzchX.js";import"./Text-DmePsxpx.js";import"./AlertIcon-DVQphOxP.js";import"./Action-eeXzbiuZ.js";import"./context-BV7cuRYy.js";import"./useStatic-DSoJUNwo.js";import"./getActionGroupSlot-DFI-GPKm.js";import"./Popover-CKAofXvl.js";import"./useOverlayController-BFg7GYyz.js";import"./OverlayContextProvider-CG_F_ZAP.js";import"./Dialog-oT8hORp9.js";import"./RSPContexts-PfgqXwd-.js";import"./OverlayArrow-CCFRyk0z.js";import"./useControlledState-B7ztCH5k.js";import"./Collection-1Gj7oR7J.js";import"./CollectionBuilder-Dpff-p5v.js";import"./SelectionIndicator-DTqsITpO.js";import"./Separator-BKBkElFN.js";import"./SelectionManager-frOqR2a6.js";import"./useEvent-lhMNtMgY.js";import"./useCollator-BLLfUz8T.js";import"./FocusScope-D5Cgd53Y.js";import"./VisuallyHidden-Cqn4F1Sv.js";import"./Switch-BMkIUrjc.js";import"./useFieldComponent-pH8UQhzW.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-5on0PfsK.js";import"./useFormReset-D5EHipFr.js";import"./OverlayTrigger-DZLdxrfo.js";import"./DialogTriggerView-DqPyynzK.js";import"./Overlay-BUZ7QSQh.js";import"./ButtonView-TCVIqSjz.js";import"./Flex-BUAMx_JT.js";import"./Heading-BFrSNe6W.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
