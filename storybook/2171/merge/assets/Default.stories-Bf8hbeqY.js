import{j as r}from"./iframe-CkaLytcH.js";import{u as d,a0 as l,Z as g,y as u,a1 as x}from"./IconWarning-at2C7kXG.js";import{L as m}from"./Link-Ch1hHAdK.js";import{a8 as s,a9 as h,M as j,e as f,f as p}from"./TimeField-CD_1Cvsc.js";import{B as o}from"./Button-CNnlz4DJ.js";import{T as c}from"./Text-tzLzAj2U.js";import{I as M}from"./Image-B4WOffmQ.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-D0TiQ1yF.js";import{c as k}from"./FileCardList-DbMTg1eZ.js";import"./Section-D3xKxzs1.js";import{H as S}from"./Heading-CDNPJ0iR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B_PBnLNZ.js";import"./mergeRefs-CCvS6fDC.js";import"./index-CUykgx4T.js";import"./useLocalizedStringFormatter-BLs_py7w.js";import"./context-BgsgCuSf.js";import"./utils-Cx1NHB3m.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BYIv-g0Z.js";import"./useFocusable-DNVgDv7W.js";import"./Accordion-O8KQNDhm.js";import"./dynamic-CuWqRT77.js";import"./ActionGroup-CAlgHOw9.js";import"./Alert-Cn90v1OP.js";import"./AlertIcon-C1KERsp1.js";import"./AlertBadge-EOMQWw9S.js";import"./Align-B8YLISN9.js";import"./Popover-O-ijI_rS.js";import"./context-C49kt-dL.js";import"./Button-6wBbL84E.js";import"./ProgressBar-DEywvAoj.js";import"./Hidden-DtaNkSKc.js";import"./RSPContexts-DGlCkRo9.js";import"./Collection-G136PDCR.js";import"./CollectionBuilder-D5yy7zsb.js";import"./SelectionIndicator-C6-uo9TF.js";import"./Separator-BUQgzvoO.js";import"./browser-BGuPTbio.js";import"./useStatic-CwKwrY2l.js";import"./OverlayTrigger-BAlGpEF-.js";import"./TableFooterRow-DTIDyRXC.js";import"./SkeletonText-BvetQVDs.js";import"./AvatarStack-D2_NoW2F.js";import"./Badge-BPLvzjro.js";import"./BigNumber-PI7ivuk4.js";import"./Breadcrumb-Cz8sITnV.js";import"./Legend-D7Hlt0lN.js";import"./Color-Bv30AifR.js";import"./Content-CDQlrVSe.js";import"./Label-C12WmE73.js";import"./ContextualHelpTrigger-O6xxa11A.js";import"./CounterBadge-BkFZCkUW.js";import"./DonutChart-CyfbjEIy.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DcaWbFCQ.js";import"./Header-CYrnS-JX.js";import"./Initials-o8TldnRX.js";import"./InlineCode-BSZBkh4R.js";import"./PopoverTrigger-DdiRrf85.js";import"./LoadingSpinner-B6kRnXp7.js";import"./Separator-Bbi4YrrB.js";import"./Message-DaqEjKEm.js";import"./MessageSeparator-B31U0QQH.js";import"./NavigationGroup-CORL8hsO.js";import"./Notification-BilvgaaS.js";import"./NotificationProvider-CEjHGY9X.js";import"./ProgressBar-J82fOLhc.js";import"./Rating-JgrMmlzu.js";import"./Skeleton-DIhE6pV7.js";import"./EmulatedBoldText-ChGTtZfs.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
