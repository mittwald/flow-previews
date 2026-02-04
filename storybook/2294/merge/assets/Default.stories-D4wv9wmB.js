import{j as r}from"./iframe-RCf6-4YI.js";import{u as d,a0 as l,Z as g,a1 as u,a2 as x}from"./IconWarning-B0h7osnB.js";import{L as m}from"./Link-Did29DyM.js";import{H as s}from"./HeaderNavigation-BM90HI4X.js";import{B as o}from"./Button-CRZ6FKVD.js";import{T as p}from"./Text-HaNR6yqL.js";import{I as h}from"./Image-w7CB6eFg.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DzGpBC83.js";import{C as M,M as c}from"./MenuItem-CntTblNo.js";import{C as I}from"./ContextMenuTrigger-CYWpLAs2.js";import"./ContextMenuSection-BKm1CmgZ.js";import{a as T,M as k}from"./Modal-DsuNbtzn.js";import{H}from"./Heading-B3B6PIpG.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gpdQqKr8.js";import"./index-DOrHsa1U.js";import"./index-BOW2unrE.js";import"./remote-B1M75xiP.js";import"./useLocalizedStringFormatter-BHr3YdQC.js";import"./context-C_2cqKRl.js";import"./utils-2Kt3K5yX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-BlmWIWuz.js";import"./usePress--XVd0Ch5.js";import"./useFocusRing-DZgLoJPG.js";import"./useFocusable-CGRcLUlH.js";import"./dynamic-KYjVHqFc.js";import"./LoadingSpinner-Cmdt8GzS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BjppKy1G.js";import"./ProgressBar-DoFcQr9q.js";import"./Label-DjMItCLE.js";import"./Hidden-C6k2LQ4g.js";import"./useLabel-6KWBnhoZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CrfZ_U78.js";import"./EmulatedBoldText-DexDNb3B.js";import"./Text-BGlg7n8N.js";import"./AlertIcon-C_s3bh0k.js";import"./Action-3k_Z5Vty.js";import"./context-CPkaXk0v.js";import"./useStatic-CutofGFR.js";import"./getActionGroupSlot-D-mME3-D.js";import"./Popover-Dgdlkh7G.js";import"./useOverlayController-CujP3Hug.js";import"./OverlayContextProvider-ByS0uwk8.js";import"./Dialog-DSQ8RGJ5.js";import"./RSPContexts-BsLLj1Xv.js";import"./OverlayArrow-CuFac9ex.js";import"./useControlledState-BQGvOabU.js";import"./Collection-DBj67fTj.js";import"./CollectionBuilder-CTQYESGa.js";import"./SelectionIndicator-H7CrMh-P.js";import"./Separator-B1Fq1xVo.js";import"./SelectionManager-Dflhd3Nn.js";import"./useEvent-2JrAtdMs.js";import"./useCollator-CJsBKryN.js";import"./FocusScope-BrE8vcb4.js";import"./VisuallyHidden-I0X1hTaI.js";import"./Switch-Dexb63u8.js";import"./useFieldComponent-C9VOsv8D.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Y5JGQboA.js";import"./useFormReset-CpZDZfD6.js";import"./OverlayTrigger-0-HRuxGs.js";import"./DialogTriggerView-DYsFtSzX.js";import"./Overlay-DuVvOwoJ.js";import"./ButtonView-Bsuml8lR.js";import"./Flex-Dr6q4180.js";import"./ActionGroup-MIHI0hnG.js";import"./Content-DmnhNqJW.js";import"./Heading-DTpFTjmP.js";const zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Fr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Fr as __namedExportsOrder,zr as default};
