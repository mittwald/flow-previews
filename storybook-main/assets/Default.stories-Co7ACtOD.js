import{j as r}from"./iframe-jaoHr1AV.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-DyIA4Uof.js";import{L as m}from"./Link-BC0An8Wr.js";import{H as s}from"./HeaderNavigation-CPeNYiFV.js";import{B as o}from"./Button-DsyAZnvz.js";import{T as p}from"./Text-Cs3EhNpG.js";import{I as h}from"./Image-CfpVXueb.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-C1LjVxyg.js";import{C as M,M as c}from"./MenuItem-JCGIOWqf.js";import{C as I}from"./ContextMenuTrigger-3D9kvHlc.js";import"./ContextMenuSection-BSB41Hhw.js";import{M as T}from"./ModalTrigger-C6chOJNr.js";import{M as k}from"./Modal-B8CAdwBg.js";import{H}from"./Heading-BypYnbKw.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CrOXvTqi.js";import"./index-CR-YYcjl.js";import"./index-BFCtAlHX.js";import"./remote-CF-AY8I2.js";import"./useLocalizedStringFormatter-B75Dx9X1.js";import"./context-CW7DVTht.js";import"./utils-CQw042JL.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-GROhvItb.js";import"./usePress-WaW8O6jQ.js";import"./useFocusRing-CA-tHgfv.js";import"./useFocusable-Bnc4O4Ay.js";import"./dynamic-BZQIArQs.js";import"./LoadingSpinner-DQaYydFO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DhLHtzSw.js";import"./ProgressBar-D0TA1OyO.js";import"./Label-Dvi8c8U4.js";import"./Hidden-BCtaYkH3.js";import"./useLabel-XwramTU6.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-gEDtR-OK.js";import"./EmulatedBoldText-DDNOwYGP.js";import"./Text-DE-JOko8.js";import"./AlertIcon-BkGbvGvC.js";import"./ActionBatch-Dl5Fmp7w.js";import"./useOverlayController-CzdtfrCF.js";import"./useStatic-CMyMNZPZ.js";import"./getActionGroupSlot-BJH_a8Yi.js";import"./Popover-BDgL-7Qp.js";import"./OverlayContextProvider-CEARkGE9.js";import"./Dialog-COvhX_CP.js";import"./RSPContexts-CUx4KoIL.js";import"./OverlayArrow-BDs_imrE.js";import"./useControlledState-H8E68uKK.js";import"./Collection-CODju4Fo.js";import"./CollectionBuilder-CN9LptsI.js";import"./SelectionIndicator-CFfIf2cB.js";import"./Separator-BHV6nvqI.js";import"./SelectionManager-C8TGpPIB.js";import"./useEvent-NPetVyFU.js";import"./useCollator-CCOGTm23.js";import"./FocusScope-B5Ctyl2K.js";import"./VisuallyHidden-DhIewZ3I.js";import"./Switch-Di8rMYs0.js";import"./useFieldComponent-D-iYVveA.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CJDI7_rY.js";import"./useFormReset-B3LvCMGn.js";import"./OverlayTrigger-mWrXut7l.js";import"./DialogTriggerView-8bGCEpnm.js";import"./Overlay-B6aX1fvL.js";import"./ButtonView-DldKei58.js";import"./Flex-MfsvjoaP.js";import"./Heading-CGZUJUiQ.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
