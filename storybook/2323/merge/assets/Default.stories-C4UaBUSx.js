import{j as r}from"./iframe-Bvl8-Rhq.js";import{u as d,a2 as l,$ as g,a3 as u,a4 as x}from"./IconWarning-_TKsX-mO.js";import{L as m}from"./Link-DA5wd4vL.js";import{H as s}from"./HeaderNavigation-ZmV8AtBO.js";import{B as o}from"./Button-_6nTdRI5.js";import{T as p}from"./Text-CBdBop4j.js";import{I as h}from"./Image-8JudUcLN.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DII-lFzv.js";import{C as M,M as c}from"./MenuItem-BKPhBHt_.js";import{C as I}from"./ContextMenuTrigger-DDagfyh8.js";import"./ContextMenuSection-DoPnGH4Z.js";import{M as T}from"./ModalTrigger-C9np0aS7.js";import{M as k}from"./Modal-DJXXBtnB.js";import{H}from"./Heading-CY0V-mNT.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dyl-PKqx.js";import"./index-C9o18Dic.js";import"./index-uwiO8q01.js";import"./remote-CTLFAioN.js";import"./useLocalizedStringFormatter-Cg9GFE8r.js";import"./context--xVWQ6Ca.js";import"./utils-D7QihGpD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DXNpHz9A.js";import"./usePress-C7_C1qgD.js";import"./useFocusRing-gQZwig4O.js";import"./useFocusable-CNuLnnFg.js";import"./dynamic-hIR-PLzh.js";import"./LoadingSpinner-Qw5Fkt_A.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DiDTVCSs.js";import"./ProgressBar-SpXG_wSx.js";import"./Label-nFrsKobo.js";import"./Hidden-G2krlLtJ.js";import"./useLabel-B5hAF-sV.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B1OJJ6Dj.js";import"./EmulatedBoldText-BoCe5muM.js";import"./Text-BaIKemC9.js";import"./AlertIcon-DxYeysTG.js";import"./ActionBatch-TusZCIcz.js";import"./useOverlayController-Bk3E4ZUc.js";import"./useStatic-CBtM_Udw.js";import"./getActionGroupSlot-ConeELan.js";import"./Popover-lnpWKhcE.js";import"./OverlayContextProvider-Dyr3lJ1d.js";import"./Dialog-BAI9Op-m.js";import"./RSPContexts-B8aZy59D.js";import"./OverlayArrow-IqXCmbe_.js";import"./useControlledState-B5E2fQyc.js";import"./Collection-Ep3IaGeN.js";import"./CollectionBuilder-B8HmBXk8.js";import"./SelectionIndicator-i35HMeKk.js";import"./Separator-Depa_-5B.js";import"./SelectionManager-BbidBNN5.js";import"./useEvent-CKY3Iiay.js";import"./useCollator-1R1bRnUk.js";import"./FocusScope-DRyVjtRp.js";import"./VisuallyHidden-ScIHpAUT.js";import"./Switch-66xOqIyi.js";import"./useFieldComponent-D4BbqCv_.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dnvz7fxs.js";import"./useFormReset-C0JkbMmh.js";import"./OverlayTrigger-DBaHgX3j.js";import"./DialogTriggerView-pVrwVuFV.js";import"./Overlay-CgTeHkhl.js";import"./ButtonView-D4KdSaST.js";import"./Flex-CFHOPjrr.js";import"./Heading-1gB4U-P4.js";const qr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
