import{j as r}from"./iframe-BuRyV86k.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-DAJxMizk.js";import{L as m}from"./Link-w8uH5h7m.js";import{H as s}from"./HeaderNavigation-BH6Dy_Uj.js";import{B as o}from"./Button-CyndH9Xm.js";import{T as p}from"./Text-DPwKDAaR.js";import{I as h}from"./Image-CxBFbLTr.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-MtKEt4cQ.js";import{C as M,M as c}from"./MenuItem-1dmmFGJK.js";import{C as I}from"./ContextMenuTrigger-FuNFJt2Q.js";import"./ContextMenuSection-Mj7n-SRG.js";import{a as T,M as k}from"./Modal-D5UXNyjU.js";import{H}from"./Heading-oMtFtRoB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DspQ11pS.js";import"./index-AZn-raxL.js";import"./index-DXDzX26U.js";import"./remote-Cg9OAbJn.js";import"./useLocalizedStringFormatter-Dqmj3fXI.js";import"./context-C6SHLczB.js";import"./utils-DCjU3VYp.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-CQWcTqjz.js";import"./usePress-B_1LlkAk.js";import"./useFocusRing-CY0UXM2e.js";import"./useFocusable-CtKU_QIU.js";import"./dynamic-clmxwr04.js";import"./LoadingSpinner-BX044VJ0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-0f0DNfgK.js";import"./ProgressBar-sJd2s29u.js";import"./Label-CVQyOr4s.js";import"./Hidden-Dduq3kE3.js";import"./useLabel-9drM0Q_0.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DvnOBVed.js";import"./EmulatedBoldText-m_25Q3I7.js";import"./Text-D3tRocSh.js";import"./AlertIcon-CtbR1iuV.js";import"./Action-KY3p1CrK.js";import"./context-BBsiVWSW.js";import"./useStatic-Bozflp-3.js";import"./getActionGroupSlot-BzS6Espk.js";import"./Popover-BVSj5O_5.js";import"./useOverlayController-BJSaXgbE.js";import"./OverlayContextProvider-BEH_6rpJ.js";import"./Dialog-aD4BOG19.js";import"./RSPContexts-Czmfvb19.js";import"./OverlayArrow-DmdSnWXA.js";import"./useControlledState-DYwoO1wA.js";import"./Collection-BEHIjUyH.js";import"./CollectionBuilder-W32wrNWH.js";import"./SelectionIndicator-r0KfSIub.js";import"./Separator-Bz6jqVd_.js";import"./SelectionManager-CGRbj4b-.js";import"./useEvent-LxFJ0S3x.js";import"./useCollator-rSEenu5t.js";import"./FocusScope-DBYeUwg2.js";import"./VisuallyHidden-BxxKUxYt.js";import"./Switch-sjnNpfkN.js";import"./useFieldComponent-Duyh6ShH.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CGMSGG1x.js";import"./useFormReset-BkHfz2ea.js";import"./OverlayTrigger-BevBDs3M.js";import"./DialogTriggerView-C0TjJf3c.js";import"./Overlay-DLsTRWoL.js";import"./ButtonView-CxrixtJG.js";import"./Flex-CYs8Zglf.js";import"./Heading-BErX5OWg.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
