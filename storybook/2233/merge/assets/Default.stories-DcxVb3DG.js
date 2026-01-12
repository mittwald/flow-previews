import{j as r}from"./iframe-DkC9HeFh.js";import{q as d,a1 as l,_ as g,u,a2 as x}from"./IconWarning-6DY0-AAa.js";import{L as m}from"./Link-Yw1jAvGj.js";import{H as s}from"./HeaderNavigation-D9RQr2xt.js";import{B as o}from"./Button-B7ieOWfK.js";import{T as p}from"./Text-B-gx4bXK.js";import{I as h}from"./Image-DEFxxo88.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Bn3duAOj.js";import{C as M,M as c}from"./ContextMenu-DI82mCqg.js";import{C as I}from"./ContextMenuTrigger-0Vh3RcUx.js";import"./ContextMenuSection-nkrIclXc.js";import{a as T,M as k}from"./Modal-CV904x5q.js";import{H}from"./Heading-C5UH4Hr2.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-1oYrvkPj.js";import"./index-DvyT4dL7.js";import"./index-84tLr-0T.js";import"./remote-C2KQESr1.js";import"./useLocalizedStringFormatter-BMEualnj.js";import"./context-FwWFVwDs.js";import"./utils-CQbe0cgS.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-zXWrYZpb.js";import"./useFocus-DkNOoSBL.js";import"./useFocusRing-C9ROKOON.js";import"./useFocusable-CeYJrI7n.js";import"./dynamic-DDaduNaQ.js";import"./LoadingSpinner-lFYILNSp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-1sEra0ij.js";import"./ProgressBar-CIHpzS8j.js";import"./Label-Dz_bjD6f.js";import"./Hidden-Dt8SDEzH.js";import"./useLabel-Yk9h4-sj.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-tA6G_ksz.js";import"./EmulatedBoldText-ubSX6qOz.js";import"./Text-BZKGVCR5.js";import"./AlertIcon-BRQK8hpu.js";import"./Switch-BVD1oNrX.js";import"./useFieldComponent-eCPWR12U.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D4UoN7sA.js";import"./useFormReset-BF2XnUgU.js";import"./useControlledState-Ul0j90Sg.js";import"./VisuallyHidden-DWtp1z23.js";import"./Dialog-BJyrAoE0.js";import"./RSPContexts-CKa7E1cC.js";import"./OverlayArrow-BJ-VOV5h.js";import"./Collection-CUZZqAxe.js";import"./CollectionBuilder-C7f0KbGc.js";import"./SelectionIndicator-2dj1bxWN.js";import"./Separator-YXmfk0mZ.js";import"./SelectionManager-ElI-xXNm.js";import"./useEvent-DWxhQQFL.js";import"./useCollator-DUnRWfY0.js";import"./FocusScope-Bsk9Ww9W.js";import"./Action-BeqMUzE-.js";import"./context-Z29bubao.js";import"./useStatic-8Ma0Gu-h.js";import"./getActionGroupSlot-BkxkF0Oa.js";import"./Popover-nq4j79nG.js";import"./useOverlayController-CKW4WHoS.js";import"./OverlayContextProvider-6aRE9S_a.js";import"./OverlayTrigger-BY_bjwFe.js";import"./DialogTriggerView-C81GdE1z.js";import"./Overlay-C5reTD6x.js";import"./ButtonView-DQ4_PVPD.js";import"./Flex-C7RQaBoU.js";import"./Heading-C_Zexpqw.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
