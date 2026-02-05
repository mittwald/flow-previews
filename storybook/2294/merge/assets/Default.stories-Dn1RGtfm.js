import{j as r}from"./iframe-BAsHckrK.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-DHq1gdF3.js";import{L as m}from"./Link-BhxfUhLW.js";import{H as s}from"./HeaderNavigation-sS_MKHwd.js";import{B as o}from"./Button-CAoYj-yB.js";import{T as p}from"./Text-B__BY7tJ.js";import{I as h}from"./Image-CdVKb_3q.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DNxKhkqD.js";import{C as M,M as c}from"./MenuItem-W3IJjmZh.js";import{C as I}from"./ContextMenuTrigger-DtGLLFbz.js";import"./ContextMenuSection-BquW4vGk.js";import{a as T,M as k}from"./Modal-yWg_lt-K.js";import{H}from"./Heading-CuVtTPS-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B65nQAul.js";import"./index-CyIJxzCh.js";import"./index-Cf_R1xcK.js";import"./remote-5f3Q71VQ.js";import"./useLocalizedStringFormatter-CGl9WC2_.js";import"./context-BKg0mO6Y.js";import"./utils-AcXTY-LA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DSg5hzPG.js";import"./usePress-BtuPSsUz.js";import"./useFocusRing-PAL8hD_p.js";import"./useFocusable-DEw7yEFU.js";import"./dynamic-CGZuOMtH.js";import"./LoadingSpinner-fmonyGhO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-v8rEwTVX.js";import"./ProgressBar-BYgBobO-.js";import"./Label-Cla8ySRz.js";import"./Hidden-CitD2GXi.js";import"./useLabel-Zs1yjNWV.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-tZCM2k1B.js";import"./EmulatedBoldText-BuJbkCoS.js";import"./Text-CORhkzC6.js";import"./AlertIcon-C2q1LJ0F.js";import"./Action-WxgR-8km.js";import"./context-BHkWm8Gn.js";import"./useStatic-CHwNqk00.js";import"./getActionGroupSlot-B1R4nGn3.js";import"./Popover-DEs5TtfY.js";import"./useOverlayController-BBLTL3Hv.js";import"./OverlayContextProvider-BJO-3hwU.js";import"./Dialog-BI9ufNdz.js";import"./RSPContexts-CrAnBcro.js";import"./OverlayArrow-BEZkQ9dz.js";import"./useControlledState-DIA42IR3.js";import"./Collection-B6YyQZIk.js";import"./CollectionBuilder-Ciu-gQv8.js";import"./SelectionIndicator-ClkIlDZY.js";import"./Separator-ClsU7Cqa.js";import"./SelectionManager-DTu8mNRc.js";import"./useEvent-BI0qkTtn.js";import"./useCollator-1De53UJM.js";import"./FocusScope-BSJXv8u1.js";import"./VisuallyHidden-BIPiOxSh.js";import"./Switch-BQGrMP38.js";import"./useFieldComponent-uzP_CJXZ.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Cy0BigFv.js";import"./useFormReset-BBc75pQ_.js";import"./OverlayTrigger-DKYW-gxq.js";import"./DialogTriggerView-DX5H0Iyx.js";import"./Overlay-DBXk5VCT.js";import"./ButtonView-ANSEPiju.js";import"./Flex-Bofax6TV.js";import"./ActionGroup-CumlRKzq.js";import"./Content-DmirrWG5.js";import"./Heading-D3ETNjbu.js";const zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Fr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Fr as __namedExportsOrder,zr as default};
