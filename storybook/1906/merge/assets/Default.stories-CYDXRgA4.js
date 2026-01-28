import{j as r}from"./iframe-CFLRrV9_.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-DnD-gw4t.js";import{L as m}from"./Link-D8NTJOuL.js";import{H as s}from"./HeaderNavigation-DgQDXjoF.js";import{B as o}from"./Button-C6DtPvCF.js";import{T as p}from"./Text-DEmvrg4f.js";import{I as h}from"./Image-B023BgYu.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DDdo7mib.js";import{C as M,M as c}from"./MenuItem-DTB20trc.js";import{C as I}from"./ContextMenuTrigger-vpjNUd2U.js";import"./ContextMenuSection-KLSTc6el.js";import{a as T,M as k}from"./Modal-XY4jWEeN.js";import{H}from"./Heading-1o2wH2IP.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cgcg4reG.js";import"./index-C9HjT8vY.js";import"./index-24zjo-Kb.js";import"./remote-BB1QWzBE.js";import"./useLocalizedStringFormatter-BTtlqG0g.js";import"./context-bb3yZDI9.js";import"./utils-9RAZgTTl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DD1T6bJ4.js";import"./usePress-LdOf-GEu.js";import"./useFocusRing-DRVonXEI.js";import"./useFocusable-CQU1ZNCF.js";import"./dynamic-CfUvB6Rc.js";import"./LoadingSpinner-D6sn6dKn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CQ9x5Ymh.js";import"./ProgressBar-CAwZsQPk.js";import"./Label-CRwaxTbk.js";import"./Hidden-DI4qxTyt.js";import"./useLabel-C42gu-3e.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-6ZyX-izP.js";import"./EmulatedBoldText-DW1BlzUv.js";import"./Text-DCjLwlBM.js";import"./AlertIcon-Dk-GLzZT.js";import"./Action--cE17EXA.js";import"./context-CslVSGqZ.js";import"./useStatic-Bo06Q_Yy.js";import"./getActionGroupSlot-DBTwflYW.js";import"./Popover-Dnnhcr9k.js";import"./useOverlayController-yVCc_ngp.js";import"./OverlayContextProvider-0OCnXaQU.js";import"./Dialog-CsaxLO_h.js";import"./RSPContexts-CrNZITQd.js";import"./OverlayArrow-67PBRhfH.js";import"./useControlledState-BS0DqA_d.js";import"./Collection-CpUB07wh.js";import"./CollectionBuilder-CcY1vtmm.js";import"./SelectionIndicator-DLBwj5hd.js";import"./Separator-Brhc3eje.js";import"./SelectionManager-rBQZeyz7.js";import"./useEvent-C2NY4fdQ.js";import"./useCollator-BuvCZz5o.js";import"./FocusScope-To3K9I_L.js";import"./VisuallyHidden-DH38u7VP.js";import"./Switch-x4Es3Dv3.js";import"./useFieldComponent-CywuRKF5.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-TrvDOe8C.js";import"./useFormReset-BcY6_uyQ.js";import"./OverlayTrigger-C2fP4BlG.js";import"./DialogTriggerView-B7xPES0e.js";import"./Overlay-DH38aqt9.js";import"./ButtonView-C98-Wvmx.js";import"./Flex-DP4yqqiS.js";import"./Heading-CD-g7ugM.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
