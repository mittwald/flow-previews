import{j as r}from"./iframe-Bqcpbrss.js";import{s as d,$ as l,Y as g,J as u,a0 as x}from"./IconWarning-dEqiOsyE.js";import{L as m}from"./Link-CYGzniL6.js";import{H as s}from"./HeaderNavigation-Bd2jD1t_.js";import{B as o}from"./Button-Cnlerii9.js";import{T as p}from"./Text-BTcvwTq1.js";import{I as h}from"./Image-Cp-kE0hE.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CYkIvhAm.js";import{C as M,M as c}from"./MenuItem-RgmvFlrB.js";import{C as I}from"./ContextMenuTrigger-BAwReSfr.js";import"./ContextMenuSection-C08RkJTE.js";import{a as T,M as k}from"./Modal-CEtpoeeg.js";import{H}from"./Heading-BG_QqVK-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BBavSPU3.js";import"./index-s7Xlkd3C.js";import"./index-H5GW8qHY.js";import"./remote-DG6VBXek.js";import"./useLocalizedStringFormatter-BO2YWtbk.js";import"./context-BrwEoz3A.js";import"./utils-BJedWkRC.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-CVO_DkHY.js";import"./useFocus-BCtAPQqm.js";import"./useFocusRing-tPpareNh.js";import"./useFocusable-C3Q_jzXL.js";import"./dynamic-Dekqokaj.js";import"./LoadingSpinner-CCDMAFHO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DylF7GCR.js";import"./ProgressBar-BzgTVPtx.js";import"./Label-B1GY4ZIq.js";import"./Hidden-BSWGkYgd.js";import"./useLabel-Cn-M2zb9.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C4ue27yU.js";import"./EmulatedBoldText-CnuyczSs.js";import"./Text-DG80-Tyy.js";import"./AlertIcon-glPdrYUy.js";import"./Action-B2JQUsel.js";import"./context-ChzSVWNL.js";import"./useStatic-DxBp64zy.js";import"./getActionGroupSlot-BE7qaGeo.js";import"./Popover-BzwM4JMX.js";import"./useOverlayController-b38M5Zqz.js";import"./OverlayContextProvider-BiPrc7hD.js";import"./Dialog-Dpg78GNT.js";import"./RSPContexts-DpyQuSVh.js";import"./OverlayArrow-BNJAVeF8.js";import"./useControlledState-BHyXOHwM.js";import"./Collection-tZi9qGtr.js";import"./CollectionBuilder-Doya1JT2.js";import"./SelectionIndicator-BkZCSZDU.js";import"./Separator-DULW3f4m.js";import"./SelectionManager-eAq13b4p.js";import"./useEvent-DW56id3t.js";import"./useCollator-B8UItRx2.js";import"./FocusScope-D6k82O5Z.js";import"./VisuallyHidden-Bjfdz3a8.js";import"./Switch-b90-hH7G.js";import"./useFieldComponent-CI3p7oBW.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-VW9tyNMs.js";import"./useFormReset-BuAWhlth.js";import"./OverlayTrigger-BuPKGzUB.js";import"./DialogTriggerView-DbTvbGyj.js";import"./Overlay-C1dj42fR.js";import"./ButtonView-D123ubsH.js";import"./Flex-BnCHEbdd.js";import"./Heading-BNK1YdHX.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
