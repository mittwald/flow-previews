import{j as r}from"./iframe-CJFOFCad.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-1TKJLzWG.js";import{L as m}from"./Link-RePb-XAx.js";import{H as s}from"./HeaderNavigation-BvDXphPj.js";import{B as o}from"./Button-D5kumnA4.js";import{T as p}from"./Text-CI7VZqhd.js";import{I as h}from"./Image-Daq_IyzH.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-C8l0STaK.js";import{C as M,M as c}from"./MenuItem-Br_P7Mqg.js";import{C as I}from"./ContextMenuTrigger-BdGqdAHu.js";import"./ContextMenuSection-C56vs4OS.js";import{a as T,M as k}from"./Modal-CcwcUcCC.js";import{H}from"./Heading-BkdVO0Fc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CJG1rMDz.js";import"./index-BSRN0wm6.js";import"./index-Cu9s0VFH.js";import"./remote-BxHvJS68.js";import"./useLocalizedStringFormatter-cHnXWnWa.js";import"./context-CMyux8LD.js";import"./utils-CsQ8IQtm.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-Cgy8euA9.js";import"./usePress-NyliDXf7.js";import"./useFocusRing-wbIo7ugc.js";import"./useFocusable-13L7602I.js";import"./dynamic-CfulQ7wG.js";import"./LoadingSpinner-CM8bIOhN.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BaNQUerH.js";import"./ProgressBar-D1JMQZ2r.js";import"./Label-Ce0MMouV.js";import"./Hidden-DmbQVkh7.js";import"./useLabel-Cb3KoAb3.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-C8kWAWSZ.js";import"./EmulatedBoldText-BF5DLBnT.js";import"./Text-8vym_gVd.js";import"./AlertIcon-BfQxSvrI.js";import"./Action-Vq-tbHvg.js";import"./context-DTASnmZz.js";import"./useStatic-C0hf5llT.js";import"./getActionGroupSlot-MsF1cFZX.js";import"./Popover-Bd7FtJNb.js";import"./useOverlayController-BwJW5xew.js";import"./OverlayContextProvider-DL2zELSv.js";import"./Dialog-YkcYiA7q.js";import"./RSPContexts-CNS2UWja.js";import"./OverlayArrow-DEHMSq9h.js";import"./useControlledState-DvHOpAD3.js";import"./Collection-B9y5YoW-.js";import"./CollectionBuilder-Dz6WVvJx.js";import"./SelectionIndicator-BI4debiO.js";import"./Separator-CS0DDWqc.js";import"./SelectionManager-DYEiw_sj.js";import"./useEvent-Bx7Hxhw9.js";import"./useCollator-DYyzym3S.js";import"./FocusScope-BYRCsx--.js";import"./VisuallyHidden-CZLhXAB_.js";import"./Switch-UHd_QZqg.js";import"./useFieldComponent-CVIwC-Yy.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DFzC1yi5.js";import"./useFormReset-DXleDB5s.js";import"./OverlayTrigger-ByPpL00z.js";import"./DialogTriggerView-CwY1oC-T.js";import"./Overlay-CepSNLhK.js";import"./ButtonView-BS0xOJCI.js";import"./Flex-ClKJEQrS.js";import"./Heading-DOJDeA1a.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
