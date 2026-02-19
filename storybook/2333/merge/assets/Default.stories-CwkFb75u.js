import{j as r}from"./iframe-ByHSJ7Zj.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-D57HRYjk.js";import{L as m}from"./Link-zFRuISWB.js";import{H as s}from"./HeaderNavigation-C9EuaO-W.js";import{B as o}from"./Button-DRqw54Mf.js";import{T as p}from"./Text-CE06l-7_.js";import{I as h}from"./Image-B4UBkIve.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DZBUHn2V.js";import{C as M,M as c}from"./MenuItem-BaSLGc8r.js";import{C as I}from"./ContextMenuTrigger-ogKAiylD.js";import"./ContextMenuSection-DKVD58cw.js";import{M as T}from"./ModalTrigger-vqUn3PKw.js";import{M as k}from"./Modal-CSnqDHAV.js";import{H}from"./Heading-BzErtb-B.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DJOvxh70.js";import"./index-Df7GZGOr.js";import"./index-Bsvsb8kg.js";import"./remote-NqjFlPNq.js";import"./useLocalizedStringFormatter-C3tZMmo1.js";import"./context-ER57Z7kb.js";import"./utils-AuVRPQNE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DXK20Yfh.js";import"./usePress-53w3WrUq.js";import"./useFocusRing-lrSptqjQ.js";import"./useFocusable-CTHcGGNa.js";import"./dynamic-C8-Mz4LM.js";import"./LoadingSpinner-CaNN1xQ8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D0UJ2jXG.js";import"./ProgressBar-wJF_229J.js";import"./Label-BGNexww0.js";import"./Hidden-BFoBdwRQ.js";import"./useLabel-DwarV1Dq.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CsRLC16Z.js";import"./EmulatedBoldText-Cuj2T5Fx.js";import"./Text-CMdjYF8F.js";import"./AlertIcon-CPipsjCC.js";import"./ActionBatch-DAYGGFfY.js";import"./useOverlayController-ClfDXpmr.js";import"./useStatic-DqDfuSHj.js";import"./getActionGroupSlot-V0cqrh5S.js";import"./Popover-D7X1-nqf.js";import"./OverlayContextProvider-D8q7I9aq.js";import"./Dialog-Bv6y7U-F.js";import"./RSPContexts-DvjI-Cwg.js";import"./OverlayArrow-y5FFWgxm.js";import"./useControlledState-CZXI0X0f.js";import"./Collection-yoadDvk3.js";import"./CollectionBuilder-wcjbsfoD.js";import"./SelectionIndicator-B6Jii7Kf.js";import"./Separator-xmb_Jck1.js";import"./SelectionManager-DuKq6lse.js";import"./useEvent-CUm4NXev.js";import"./useCollator-uet9RA9C.js";import"./FocusScope-CdPzSUjP.js";import"./VisuallyHidden-DjUeNVhy.js";import"./Switch-BW5CeMXE.js";import"./useFieldComponent-CBB8cMnJ.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-2wDBawKA.js";import"./useFormReset-BeZmi33v.js";import"./OverlayTrigger-BArWopla.js";import"./DialogTriggerView-sGhGJ4y6.js";import"./Overlay-BXECwhfH.js";import"./ButtonView-B6fmM-tn.js";import"./Flex-CcCOHM-k.js";import"./Heading-DSIgXPzr.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
