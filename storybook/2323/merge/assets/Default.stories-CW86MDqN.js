import{j as r}from"./iframe-Bq_dTdDz.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-AvRveFf8.js";import{L as m}from"./Link-CjzAVfHh.js";import{H as s}from"./HeaderNavigation-Dm6-xefh.js";import{B as o}from"./Button-DwhPeKe2.js";import{T as p}from"./Text-3w39UNLL.js";import{I as h}from"./Image-Dst3KrPQ.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-gE4V1R9R.js";import{C as M,M as c}from"./MenuItem-Bf-kbGUU.js";import{C as I}from"./ContextMenuTrigger-j9ogDVD3.js";import"./ContextMenuSection-CF0FAI_C.js";import{M as T}from"./ModalTrigger-BTC7SZjc.js";import{M as k}from"./Modal-B1kIozjh.js";import{H}from"./Heading-C8DRlUq-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BeJ1jrGf.js";import"./index-Dif5dzDL.js";import"./index-C2qM6Ecb.js";import"./remote-BGgAcFUF.js";import"./useLocalizedStringFormatter-jkyob1yB.js";import"./context-DasT5rkr.js";import"./utils-Dc83Zc3S.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-zY2zj5L9.js";import"./usePress-CxmEVb--.js";import"./useFocusRing-C2_YEmjA.js";import"./useFocusable-B7WP4__g.js";import"./dynamic-BU-d9n8a.js";import"./LoadingSpinner-QnwB8HJT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B82FCYrG.js";import"./ProgressBar-BeilQHeM.js";import"./Label-CPBWbyCv.js";import"./Hidden-CYUCWFXf.js";import"./useLabel-BL_xrhrx.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D_Oin-6N.js";import"./EmulatedBoldText-D57I_Edz.js";import"./Text-RESw6iu2.js";import"./AlertIcon-DR4HtAzR.js";import"./ActionBatch-DTgx0kqH.js";import"./useOverlayController-BN71uM-Z.js";import"./useStatic-OW4DiFQ5.js";import"./getActionGroupSlot-C-FhbO6Z.js";import"./Popover-DIyRcO8w.js";import"./OverlayContextProvider-CwxNfmUY.js";import"./Dialog-atW1yRI0.js";import"./RSPContexts-BEGF6Rgy.js";import"./OverlayArrow-D8uV1uDe.js";import"./useControlledState-DvV_L9jP.js";import"./Collection-CfTInUqx.js";import"./CollectionBuilder-DXHEkZnM.js";import"./SelectionIndicator-B0He5XEj.js";import"./Separator-oRLs3WBO.js";import"./SelectionManager-DJLtj_Nc.js";import"./useEvent-Bo6NaH-t.js";import"./useCollator-CL9Njxka.js";import"./FocusScope-jjJ71B2a.js";import"./VisuallyHidden-6gUpRQYP.js";import"./Switch-7dX-pVCq.js";import"./useFieldComponent-C92nVZms.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-SJnnhMxT.js";import"./useFormReset-BNYkLVEo.js";import"./OverlayTrigger-CkrzYHRb.js";import"./DialogTriggerView-Cc0IIML6.js";import"./Overlay-BhiillRq.js";import"./ButtonView-Vc-lBIdn.js";import"./Flex-DWL773Qy.js";import"./Heading-Cv2K6T9Y.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
