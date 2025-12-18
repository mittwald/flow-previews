import{j as r}from"./iframe-BA9q8iRx.js";import{u as d,a0 as l,Z as g,y as u,a1 as x}from"./IconWarning-Ddu6VgyQ.js";import{L as m}from"./Link-VeHt-BOj.js";import{a8 as s,a9 as h,M as j,e as f,f as p}from"./TimeField-Bb9rzd1E.js";import{B as o}from"./Button-DkX1WVEp.js";import{T as c}from"./Text-Ms6nMBSf.js";import{I as M}from"./Image-D59ZwdJj.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-FlDD9lPa.js";import{c as k}from"./FileCardList-DuDEn_SG.js";import"./Section-DoGwkV6i.js";import{H as S}from"./Heading-C0QNs5qM.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BVBE-WhE.js";import"./mergeRefs-D8u8JUrl.js";import"./index-DpY8H-Wc.js";import"./useLocalizedStringFormatter-w9QjgZdm.js";import"./context-Cn4rMbpf.js";import"./utils-QcIDpANH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing--2IgGnS-.js";import"./useFocusable-CyfzywkV.js";import"./Accordion-De7o6t37.js";import"./dynamic-HfD9Y7Ln.js";import"./ActionGroup-BrY_lNP4.js";import"./Alert-BjtrXFM-.js";import"./AlertIcon-GpJO-Z9B.js";import"./AlertBadge-sp5O60vm.js";import"./Align-BWXUYBVs.js";import"./Popover-_2bXyvx4.js";import"./context-YS9jQ858.js";import"./Button-BZr9UZHX.js";import"./ProgressBar-Bk_cCSt-.js";import"./Hidden-CwA9YFci.js";import"./RSPContexts-CXfi1L-7.js";import"./Collection-DW_VGPX_.js";import"./CollectionBuilder-VfTqomJV.js";import"./SelectionIndicator-DWxzYUVQ.js";import"./Separator-_HO3nlni.js";import"./browser-XONib2dq.js";import"./useStatic-CdSu_vHo.js";import"./OverlayTrigger-Cse3DARB.js";import"./TableFooterRow-Bg6u5xet.js";import"./SkeletonText-DWBy4XXw.js";import"./AvatarStack-B7IAlHRg.js";import"./Badge-S78DqCsX.js";import"./BigNumber-BUzL_XWj.js";import"./Breadcrumb-BFLF3mqz.js";import"./Legend-fwXNEwdb.js";import"./Color-BbyB7Xdi.js";import"./Content-54YS0aSC.js";import"./Label-CWXXLsJz.js";import"./ContextualHelpTrigger-CZA_SHxX.js";import"./CounterBadge-KIh2ANDP.js";import"./DonutChart-BD3mO4TH.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DlyfKHZS.js";import"./Header-BmRR_eGb.js";import"./Initials--0Iralrr.js";import"./InlineCode-DDc9VIyV.js";import"./PopoverTrigger-CMZxvGxV.js";import"./LoadingSpinner-CRPfYfmX.js";import"./Separator-D9V6A4pH.js";import"./Message-DDdzUGgv.js";import"./MessageSeparator-C3c69HOv.js";import"./NavigationGroup-guqWICeG.js";import"./Notification-NBit0Jcr.js";import"./NotificationProvider-CRnsHJPf.js";import"./ProgressBar-B-88x21X.js";import"./Rating-TF40lZ1V.js";import"./Skeleton-COhBmV-c.js";import"./EmulatedBoldText-W46YB4wy.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,zr as __namedExportsOrder,wr as default};
