import{j as r}from"./iframe-BjQgS_dl.js";import{u as d,a0 as l,Z as g,y as u,a1 as x}from"./IconWarning-wUhw_T8r.js";import{L as m}from"./Link-toGczOVY.js";import{a8 as s,a9 as h,M as j,e as f,f as p}from"./TimeField-DmBCIGkd.js";import{B as o}from"./Button-mR6tCl9f.js";import{T as c}from"./Text-hFF5yDpy.js";import{I as M}from"./Image-D2Uh7TNb.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-BzNSebrE.js";import{c as k}from"./FileCardList-DxtvYBZN.js";import"./Section-BeaFJCve.js";import{H as S}from"./Heading-DmijLSYI.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B3msEGiP.js";import"./mergeRefs-BqcSeRH_.js";import"./index-CCcXhUlF.js";import"./useLocalizedStringFormatter-Dg6sdA5Z.js";import"./context-3TgVXJa8.js";import"./utils-C6Mwuf68.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BWD7k8n6.js";import"./useFocusable-CMVEVLbf.js";import"./Accordion-HUQJDa8a.js";import"./dynamic-CTQIFy3Y.js";import"./ActionGroup-CR4mXt-z.js";import"./Alert-dt7Crh6d.js";import"./AlertIcon-CKkF89KF.js";import"./AlertBadge-BuoAO-EF.js";import"./Align-whB8MF17.js";import"./Popover-DNrzHtdF.js";import"./context-C9CRIziz.js";import"./Button-CWLE3PAH.js";import"./ProgressBar-DBLE5koh.js";import"./Hidden-CbsoacY0.js";import"./RSPContexts-JWS-CQt4.js";import"./Collection-Uuc2P1Rm.js";import"./CollectionBuilder-SW3JOyLp.js";import"./SelectionIndicator-DDS3Avz9.js";import"./Separator-DKQ5QqW9.js";import"./browser-D8Ytpe6r.js";import"./useStatic-CbhvCGnA.js";import"./OverlayTrigger-BZYsa2Ar.js";import"./TableFooterRow-DIeYbuw8.js";import"./SkeletonText-CYyiBvSU.js";import"./AvatarStack-B41TTh57.js";import"./Badge-CWhMpUJo.js";import"./BigNumber-DelUDah8.js";import"./Breadcrumb-W_Ta7J5l.js";import"./Legend-CJxX7Jjd.js";import"./Color-CkV5zOWc.js";import"./Content-B-6ROZD8.js";import"./Label-BioMMRbR.js";import"./ContextualHelpTrigger-GCKXkGjA.js";import"./CounterBadge-BVTBh7o7.js";import"./DonutChart-CxTDQKuL.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-s0Iy2v7I.js";import"./Header-CccJlXz1.js";import"./Initials-BQ1BPtAw.js";import"./InlineCode-DubGci4q.js";import"./PopoverTrigger-vpZCTXgF.js";import"./LoadingSpinner-BVWf40cO.js";import"./Separator-V7QUjuvc.js";import"./Message-B_08b52f.js";import"./MessageSeparator-a9jr4f53.js";import"./NavigationGroup-DACyTvZZ.js";import"./Notification-CufI5Fok.js";import"./NotificationProvider-Ba5bESUN.js";import"./ProgressBar-C_67UiSI.js";import"./Rating-CzDqBwDX.js";import"./Skeleton-CgTPZh5a.js";import"./EmulatedBoldText-CmEhCy_I.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
