import{j as r}from"./iframe-DeaTJDua.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-Bnohnd1u.js";import{L as m}from"./Link-CeQaTb3H.js";import{H as s}from"./HeaderNavigation-B-ZHzLed.js";import{B as o}from"./Button-Cbxy7DVV.js";import{T as p}from"./Text-DmX-Z1ax.js";import{I as h}from"./Image-XhZqbVjX.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-C0FVAL0T.js";import{C as M,M as c}from"./MenuItem-DGWfsP66.js";import{C as I}from"./ContextMenuTrigger-B7vm9S1N.js";import"./ContextMenuSection-CEBTY825.js";import{M as T}from"./ModalTrigger-DvD19Y1d.js";import{M as k}from"./Modal-D3vemkDI.js";import{H}from"./Heading-DNOFGRof.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-De56C_b5.js";import"./index-6wTRmFp1.js";import"./index-BmNXFkrE.js";import"./remote-4WWdz0S_.js";import"./useLocalizedStringFormatter-DUet38b8.js";import"./context-DpHy2B7Z.js";import"./utils-DAn_19Le.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DwX8c8hl.js";import"./usePress-BGs6tBRd.js";import"./useFocusRing-CR3AbbfB.js";import"./useFocusable-DXFTvAH_.js";import"./dynamic-_cZQrmBt.js";import"./LoadingSpinner-tY2JT6X0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CkcG2vDz.js";import"./ProgressBar-GULdM67U.js";import"./Label-Cq9BvoI9.js";import"./Hidden-DSflBmUF.js";import"./useLabel-C4fGorSC.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DgW11PhP.js";import"./EmulatedBoldText-cuvIuyGo.js";import"./Text-D55T9z4A.js";import"./AlertIcon-KKj1r8Dh.js";import"./ActionBatch-RbyKfuct.js";import"./useOverlayController-DRqv1s8t.js";import"./useStatic-Die7f9lk.js";import"./getActionGroupSlot-DiYPO2W1.js";import"./Popover-Bx3CBkxo.js";import"./OverlayContextProvider-BQrHrXvy.js";import"./Dialog-BDRpw9MJ.js";import"./RSPContexts-n2YtmRLP.js";import"./OverlayArrow-seoLwAns.js";import"./useControlledState-CvKG4MPs.js";import"./Collection-BBtX_wi9.js";import"./CollectionBuilder-B2bzNwzm.js";import"./SelectionIndicator-C0I4_uDy.js";import"./Separator-D-1V8FhN.js";import"./SelectionManager-CxfZry6F.js";import"./useEvent-TDS_oy8g.js";import"./useCollator-DPWjVVbc.js";import"./FocusScope-CpKBh6MC.js";import"./VisuallyHidden-BMpCP5yc.js";import"./Switch-DMQfz-Q0.js";import"./useFieldComponent-Bk8CgTUl.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-yQpFO-5d.js";import"./useFormReset-UTIDwNo9.js";import"./OverlayTrigger-Cd2hfWuE.js";import"./DialogTriggerView-r_lbluoU.js";import"./Overlay-C4R6Qd88.js";import"./ButtonView-MbZrvuWF.js";import"./Flex-JXNPn7Yl.js";import"./Heading-Bb4nX13J.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
