import{j as r}from"./iframe-D_6zdLny.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-L8yPVfI5.js";import{L as m}from"./Link-Bzdw9Y1F.js";import{H as s}from"./HeaderNavigation-BwiB2iFG.js";import{B as o}from"./Button-Hd0_GbPh.js";import{T as p}from"./Text-BucMQu3s.js";import{I as h}from"./Image-DW3rN9kx.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-CSsmfm0D.js";import{C as M,M as c}from"./MenuItem-BgLa3Jz-.js";import{C as I}from"./ContextMenuTrigger-mvmmVRDy.js";import"./ContextMenuSection-DVDgi3BO.js";import{a as T,M as k}from"./Modal-BhE-f4QO.js";import{H}from"./Heading-DUx_7A94.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./index-CT6ZSgMj.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./context-BMSZp_sq.js";import"./utils-PQD-Pczy.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-HrT7PLB3.js";import"./useFocus-D07R-Di8.js";import"./useFocusRing-CwU_FKgG.js";import"./useFocusable-pGYT2QRf.js";import"./dynamic-fYYLqg_-.js";import"./LoadingSpinner-Ca7TZ2j1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dk-D3x3z.js";import"./ProgressBar-DN3pMQzV.js";import"./Label-iDSBX_9z.js";import"./Hidden-BN9nl5w0.js";import"./useLabel-BujF7oZS.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D7xr6uHh.js";import"./EmulatedBoldText-BmP07Dnx.js";import"./Text-YMXmaajA.js";import"./AlertIcon-De8r4OOL.js";import"./Action-CDIAK01E.js";import"./context-BfwnKq6d.js";import"./useStatic-MV172PRo.js";import"./getActionGroupSlot-qiCOl6fG.js";import"./Popover-B3PEdI3k.js";import"./useOverlayController-ClIsDnWC.js";import"./OverlayContextProvider-D1-D5Oi5.js";import"./Dialog-RcAnAvxk.js";import"./RSPContexts-0i8aci_3.js";import"./OverlayArrow-vA-0UH51.js";import"./useControlledState-G8Ia7XKM.js";import"./Collection-ChPbS13-.js";import"./CollectionBuilder-C8yRBwY3.js";import"./SelectionIndicator-aPzlcNCf.js";import"./Separator-CHFb939R.js";import"./SelectionManager-BR7WMr9Q.js";import"./useEvent-GLo2x5KR.js";import"./useCollator-NS9MLfPk.js";import"./FocusScope-DgQ0PiWF.js";import"./VisuallyHidden-NfEP0AbA.js";import"./ClearPropsContextView-BWtGAMVv.js";import"./Switch-BkRhWUbF.js";import"./useMakeFocusable-CL_92pgO.js";import"./useToggleState-BXMhRIJO.js";import"./useFormReset-jO9kfZl0.js";import"./OverlayTrigger-DoYQAlMH.js";import"./ControlledNotification-BZb_de0x.js";import"./DialogTriggerView-ChMnJtST.js";import"./Overlay-CjKKkNqK.js";import"./ButtonView-DD55V4Hz.js";import"./Heading-CDoCnjT3.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const qr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,qr as __namedExportsOrder,Zr as default};
