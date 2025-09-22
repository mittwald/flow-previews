import{j as r}from"./iframe-D6MXtoeF.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-BzCByWga.js";import{L as m}from"./Link-CeX6_1AI.js";import{H as s}from"./HeaderNavigation-H-v46mkz.js";import{B as o}from"./Button-Cps8fs86.js";import{T as p}from"./Text-BFMh0nyW.js";import{I as C}from"./Image-BbmKQdsP.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Dh5-36c7.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BJGQ8xux.js";import"./ContextMenuSection-DAHajvSv.js";import{a as D,M as E}from"./Modal-CcSjARvC.js";import{H as G}from"./Heading-DsViAiwO.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DKdwmELu.js";import"./mergeRefs-DOKhc8cj.js";import"./index-fKpd1sOg.js";import"./useLocalizedStringFormatter-lfwtdpdt.js";import"./context-Ck2zuvqd.js";import"./utils-B7M3k9FN.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Ct6Wvp4V.js";import"./useFocus-DFkM6utj.js";import"./useFocusRing-DiO0sb-8.js";import"./useFocusable-mpne-nRN.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BP-swr7r.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-QOiUMIUW.js";import"./ProgressBar-bcTJnrQg.js";import"./Label-BFW3y9SA.js";import"./Hidden-Cmo_PwmO.js";import"./useLabel-D8eXzRI6.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B8Nd9l3q.js";import"./EmulatedBoldText-238cra3f.js";import"./Text-X88WQLD_.js";import"./AlertIcon-LL4KJs-J.js";import"./Action-BE7fSEbk.js";import"./context-0wOjLTza.js";import"./useStatic-BOJiZlFD.js";import"./getActionGroupSlot-hiKhMcUy.js";import"./Popover-CAmf3Vp3.js";import"./DialogTriggerView-naeHwBCH.js";import"./Dialog-DTX65kLp.js";import"./RSPContexts-DRsXlI21.js";import"./OverlayArrow-DzYaWuxq.js";import"./useControlledState-CXEx0L1H.js";import"./Collection-Cv5VHUKE.js";import"./CollectionBuilder-C1kbEgCd.js";import"./Separator-DFJzdh8J.js";import"./Group-DIpddcx2.js";import"./SearchField-BsFidkN3.js";import"./FieldError-DNUFoHGF.js";import"./Form-DWnjCikM.js";import"./useTextField-Ct6WOc7M.js";import"./useFormReset-a1QiC8fx.js";import"./TextField-D8-3KKgU.js";import"./useEvent-BvqgWnZ6.js";import"./SelectionManager-D5CRlMya.js";import"./useCollator-K4h4KKi7.js";import"./FocusScope-NXX1qwdY.js";import"./VisuallyHidden-B-VJ1Jd7.js";import"./Switch-DsCIsjDK.js";import"./Label-DskNCC55.js";import"./useToggleState-C1RUDPbl.js";import"./Overlay-ltqzearn.js";import"./ButtonView-CEOkq3b0.js";import"./Heading-D9_UVGue.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Xr as default};
